import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class SinOperator extends BaseOperator {

    getOperator() {
        return 'sin';
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
        return Math.sin(this.convertUnit(value1 || value2));
    }
}