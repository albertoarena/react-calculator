import BaseOperator from "./BaseOperator";
import DivideByZeroException from "../exceptions/DivideByZeroException";
import Constants from "../Constants";

export default class DivideOperator extends BaseOperator {

    getOperator() {
        return '/';
    }

    getPrecedence() {
        return Constants.getPrecedenceMedium();
    }

    run(value1, value2) {
        if (value2 === 0) {
            throw new DivideByZeroException();
        }
        return value1 / value2;
    }
}