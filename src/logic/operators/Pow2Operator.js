import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class Pow2Operator extends BaseOperator {

    getOperator() {
        return '^2';
    }

    getPrecedence() {
        return Constants.getPrecedenceHigh();
    }

    run(value1, value2) {
        return Math.pow(value1 || value2 || 0, 2);
    }
}