import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class PowYOperator extends BaseOperator {

    getOperator() {
        return '^';
    }

    getPrecedence() {
        return Constants.getPrecedenceHigh();
    }

    run(value1, value2) {
        return Math.pow(value1, value2);
    }

}