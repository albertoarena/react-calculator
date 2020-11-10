import BaseOperator from "./BaseOperator";

export default class AddOperator extends BaseOperator {

    getOperator() {
        return '+';
    }

    run(value1, value2) {
        return value1 + value2;
    }
}