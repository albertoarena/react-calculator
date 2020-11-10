import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class SquareRootOperator extends BaseOperator {

    getOperator() {
        return '√';
    }

    getPrecedence() {
        return Constants.getPrecedenceHigh();
    }

    getStringBrackets() {
        return true;
    }

    getStringOrder() {
        return -1;
    }

    run(value1, value2) {
        return Math.sqrt(value1 || value2 || 0);
    }
}