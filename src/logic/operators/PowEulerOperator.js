import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class PowEulerOperator extends BaseOperator {

    getOperator() {
        return "e^";
    }

    getPrecedence() {
        return Constants.getPrecedenceHigh();
    }

    getApplyImmediately() {
        return true;
    }

    run(value1, value2) {
        return Math.pow(Math.E, value1 || value2 || 0);
    }
}