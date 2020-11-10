import BaseOperator from "./BaseOperator";


export default class SubtractOperator extends BaseOperator {

    getOperator() {
        return '-';
    }

    run(value1, value2) {
        return value1 - value2;
    }
}