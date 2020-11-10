import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class CosOperator extends BaseOperator {

    getOperator() {
        return 'cos';
    }

    getPrecedence() {
        return Constants.getPrecedenceMedium();
    }

    getStringOrder() {
        return -1;
    }

    getStringBrackets() {
        return true;
    }

    getApplyImmediately() {
        return true;
    }

    run(value1, value2) {
        return Math.cos(this.convertUnit(value1 || value2));
    }
}