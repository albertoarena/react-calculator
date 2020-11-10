import BaseOperator from "./BaseOperator";
import Constants from "../Constants";

export default class NegativeOperator extends BaseOperator {

    getOperator() {
        return '-';
    }

    getPrecedence() {
        return Constants.getPrecedenceHigh();
    }

    getStringOrder() {
        return -1;
    }

    getStringNoSpacing() {
        return true;
    }

    getApplyImmediately() {
        return true;
    }

    run(value1, value2) {
        return (value1 || value2 || 0) * -1;
    }

    toFullString() {
        return '-' + Constants.getNoSpaceMarker();
    }
}