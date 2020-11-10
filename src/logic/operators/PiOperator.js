import BaseOperator from "./BaseOperator";

export default class PiOperator extends BaseOperator {

    getOperator() {
        return "π";
    }

    getApplyImmediately() {
        return true;
    }

    isConstant() {
        return true;
    }

    run(value1, value2) {
        return Math.PI;
    }
}