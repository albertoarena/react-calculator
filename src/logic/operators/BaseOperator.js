import Entity from "../Entity";
import Constants from "../Constants";

export default class BaseOperator extends Entity {

    unit = ""

    constructor(unit) {
        super();
        this.unit = unit || Constants.getUnitDefault();
        if (this.constructor === BaseOperator) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    run(value1, value2) {
        throw new Error("Method 'run' must be implemented.");
    }

    getOperator() {
        throw new Error("Method 'getOperator' must be implemented.");
    }

    getPrecedence() {
        return Constants.getPrecedenceLow();
    }

    getType() {
        return "operator";
    }

    getApplyImmediately() {
        return false;
    }

    toString() {
        return this.getOperator();
    }

    isConstant() {
        return false;
    }

    convertUnit(angle) {
        return this.unit === Constants.getUnitDegrees() ? angle * Math.PI / 180 : angle;
    }

}