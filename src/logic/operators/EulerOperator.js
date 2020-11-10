import BaseOperator from "./BaseOperator";

export default class EulerOperator extends BaseOperator {

    getOperator() {
        return "e";
    }

    getApplyImmediately() {
        return true;
    }

    isConstant() {
        return true;
    }

    run(value1, value2) {
        return Math.E;
    }
}