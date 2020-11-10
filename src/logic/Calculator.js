import _ from "lodash";
import BaseOperator from "./operators/BaseOperator";
import BaseNumber from "./numbers/BaseNumber";
import ResultNumber from "./numbers/ResultNumber";
import OperatorsFactory from "./OperatorsFactory";
import BaseException from "./exceptions/BaseException";
import Constants from "./Constants";

export default class Calculator {

    _lastNumber = "";
    _lastException = "";
    processed = false;
    debug = false;
    history = [];
    unit = Constants.getUnitDefault();

    operatorFactory = new OperatorsFactory();

    controls = {
        "clear": this.clear.bind(this),
        "equals": this._execute.bind(this),
    };

    output = [];
    operators = [];
    queue = [];
    logs = [];

    constructor(initConfig) {
        if (initConfig) {
            this.unit = initConfig.unit || Constants.getUnitDefault();
            this.debug = initConfig.debug || false;
        }
    }

    setUnit(unit) {
        this.unit = unit;
    }

    clear() {
        this.output = [];
        this.operators = [];
        this.queue = [];
        this._lastNumber = "";
        this.history = [];
        this._lastException = "";
        this.logs.push("clear");
        this.logs.push("---");
    }

    debugLog(v) {
        if (!this.debug) {
            return;
        }

        let log = !_.isArray(v) ? [v] : v;
        log = log.concat([{
            processed: this.processed,
            output: this.output.slice(),
            operators: this.operators.slice(),
            queue: this.queue.slice(),
            history: this.history.slice(),
            logs: this.logs.slice(),
        }]);
        console && console.log(log);
    }

    _handleControl(v) {
        if (this.controls[v]) {
            (this.controls[v])();
            return true;
        }
    }

    _getValue() {
        if (this._lastNumber && this._lastNumber !== "0") {
            return this._lastNumber;
        }

        if (_.last(this.queue)) {
            return _.last(this.queue).getValue() + "";
        }

        if (_.last(this.output)) {
            return _.last(this.output).getValue() + "";
        }

        return "";
    }

    _getNextValue() {
        if (_.last(this.output)) {
            return this.output.pop().getValue();
        }
        return null;
    }

    _processConstant(item) {
        this.output.push(new BaseNumber(item.run(0, 0)));
    }

    _applyImmediately(item) {
        this._addNumber();
        this.output.push(new BaseNumber(item.run(0, this._getNextValue()), item.toFullString()));
    }

    _process(item) {
        // Add to history
        this.history.push(item);

        if (item instanceof BaseOperator) {
            // Check if constant
            if (item.isConstant()) {
                this._processConstant(item);
                this.debugLog(['process', item]);
                return;
            }

            // Check if immediately applied
            if (item.getApplyImmediately()) {
                this._applyImmediately(item);
                this.debugLog(['process', item]);
                return;
            }

            // Get the latest operator in stack
            let lastInStack = _.last(this.operators);
            if (lastInStack) {
                if (item.getPrecedence() > lastInStack.getPrecedence()) {
                    // Push current operator
                    this.operators.push(item);
                } else {
                    // Process latest operator in stack
                    let value2 = this._getNextValue();
                    let value1 = this._getNextValue();
                    this.output.push(new BaseNumber(lastInStack.run(value1, value2)));
                    // Pop last operator
                    this.operators.pop();
                    // Push current operator
                    this.operators.push(item);
                }
            } else {
                // Empty stack, push current operator
                this.operators.push(item);
            }
        } else if (item instanceof BaseNumber) {
            // // Add to history
            // this.history.push(item);
            this.output.push(item);
        }
        this.debugLog(['process', item]);
    }

    _addNumber() {
        let processed = false;
        if (this._lastNumber) {
            // Process last number and resets
            this._process(new BaseNumber(Number(this._lastNumber)));
            this._lastNumber = "";
            processed = true;
        } else {
            // Picks latest result
            if (this.queue.length) {
                this._process(new BaseNumber(_.last(this.queue).getValue()));
                processed = true;
            }
        }
        return processed;
    }

    _finaliseProcess() {
        this._addNumber();

        // Reduce operators in stack
        while (this.operators.length) {
            // Process latest operator in stack
            let value2 = this._getNextValue();
            let value1 = this._getNextValue();
            let operator = this.operators.pop();
            this.output.push(new BaseNumber(operator.run(value1, value2)));
        }
    }

    _execute() {
        // Finalise process
        this._finaliseProcess();

        // Calculate result
        let result = 0;
        if (this.output.length) {
            // Get result
            result = new ResultNumber(this.output.pop().getValue());

            // Add total to queue
            this.queue.push(result);
            this.history.push(result);

            this.processed = true;
        }
        return result;
    }

    getResult() {
        return {
            processed: this.processed,
            total: this._lastException ? "Error" : (this.queue.length ? _.last(this.queue).getValue() + "" : null),
            next: this._getValue(),
            // operation: null,
            history: this._getHistory(),
            exception: this._lastException,
        };
    }

    /**
     * Get history
     *
     * @private
     */
    _getHistory() {
        // Normalise operators with inverted string order
        let history = [];
        this.history.forEach((item) => {
            // Add item
            history.push(item.toFullString());

            let index = history.length - 1;
            if (_.isObject(item)) {
                if (item.getStringOrder() < 0 && index > 0) {
                    // Swap with previous item
                    let v = history[index - 1];
                    history[index - 1] = item.toFullString();

                    // Add brackets, if necessary
                    history[index] = item.getStringBrackets() ? '(' + v + ')' : v;
                } else {
                    // Add brackets, if necessary
                    if (item.getStringBrackets()) {
                        history[index] = '(' + history[index] + ')';
                    }
                }
            }
        });
        return history.join(' ')
                .replace(new RegExp("[\\s]{1}" + Constants.getNoSpaceMarker(), 'gi'), '')
                .replace(new RegExp(Constants.getNoSpaceMarker() + "[\\s]{1}", 'gi'), '')
                .replace(new RegExp(Constants.getCompactSpaceMarker(), 'gi'), '')
            + (this._lastNumber ? " " + this._lastNumber : "");
    }

    _isNumber(item) {
        return /^[0-9.]+/.test(item);
    }

    // getControl(item) {
    //     return this.controls[item];
    // }

    copy() {
        console.log('calculator.copy, to implement');
    }

    paste() {
        console.log('calculator.paste, to implement');
    }

    calculate(buttonName) {
        // Reset process, if new calculation starts
        if (this.processed) {
            this.processed = false;
            this.history = [];
            this.logs.push("reset");
        }

        try {
            if (this._isNumber(buttonName)) {
                this.logs.push("number " + buttonName);
                if (!this._lastNumber && buttonName === "0") {
                    // Ignore multiple initial 0
                    if (!this._lastNumber) {
                        this._lastNumber = "0";
                    }
                } else {
                    // Remove initial 0
                    if (this._lastNumber === "0") {
                        this._lastNumber = "";
                    }

                    // Concat digits to latest number
                    this._lastNumber += buttonName;
                }
            } else if (this._handleControl(buttonName)) {
                // Processed
                this.logs.push("ctrl " + buttonName);
            } else if (this.operatorFactory.isOperator(buttonName)) {
                this.logs.push("operator " + buttonName);
                // Add last number
                this._addNumber();

                // Process operator
                this._process(this.operatorFactory.getOperator(buttonName, this.unit));
            } else {
                // NOP, e.g. control or shift key
            }
        } catch (e) {
            // Handle exception e.g. divide by zero
            this._lastException = e instanceof BaseException ? e.getMessage() : e;
            this.logs.push("error " + this._lastException);
        }

        // Return result
        return this.getResult();
    }

    /**
     * Wrapper
     * @param v
     * @return {Calculator}
     */
    operation(v) {
        this.calculate(v);
        return this;
    }

    /**
     * Wrapper
     * @return {*}
     */
    result() {
        return this.calculate('equals');
    }

}