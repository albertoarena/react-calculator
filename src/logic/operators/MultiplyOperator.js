import BaseOperator from "./BaseOperator";
import Constants from "../Constants";


export default class MultiplyOperator extends BaseOperator {

    getOperator() {
        return 'x';
    }

    getPrecedence() {
        return Constants.getPrecedenceMedium();
    }

    run(value1, value2) {
        return value1 * value2;
    }
}