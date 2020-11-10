import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class TanOperator extends BaseOperator {

    getOperator() {
        return 'tan';
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
        return Math.tan(this.convertUnit(value1 || value2));
    }
}