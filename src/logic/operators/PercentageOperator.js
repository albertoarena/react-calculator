import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class PercentageOperator extends BaseOperator {

    getOperator() {
        return '%';
    }

    getPrecedence() {
        return Constants.getPrecedenceHigh();
    }

    getApplyImmediately() {
        return true;
    }

    run(value1, value2) {
        return (value1 || value2 || 0) / 100;
    }

    toFullString() {
        return Constants.getNoSpaceMarker() + this.toString();
    }

}