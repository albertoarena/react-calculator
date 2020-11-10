import _ from "lodash";
import BaseOperator from "./BaseOperator";
import Constants from "../Constants";
import InvalidException from "../exceptions/InvalidException";

export default class LogarithmOperator extends BaseOperator {

    getOperator() {
        return 'log';
    }

    getStringBrackets() {
        return true;
    }

    getStringOrder() {
        return -1;
    }

    getPrecedence() {
        return Constants.getPrecedenceMedium();
    }

    getApplyImmediately() {
        return true;
    }

    run(value1, value2) {
        const ret = Math.log10(value1 || value2 || 0);
        if (_.isNaN(ret)) {
            throw new InvalidException();
        }
        return ret;
    }

}