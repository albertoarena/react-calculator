import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class FactorialOperator extends BaseOperator {

    // https://stackoverflow.com/a/34566376/279262
    factorial(n) {
        var absNum = Math.abs(n);
        var i = 1;
        var factorial = 1;
        while (i <= absNum) {
            factorial *= i;
            i += 1;
        }
        if (absNum % 2 === 1 && n < 0) {
            return -factorial
        }
        return factorial;
    }

    getOperator() {
        return '!';
    }

    getPrecedence() {
        return Constants.getPrecedenceHigh();
    }

    getStringNoSpacing() {
        return true;
    }

    run(value1, value2) {
        return this.factorial(value1 || value2);
    }

    toFullString() {
        return Constants.getNoSpaceMarker() + "!";
    }

}