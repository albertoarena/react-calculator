import BaseNumber from "./BaseNumber";

export default class ResultNumber extends BaseNumber {

    getType() {
        return "result";
    }

    toString() {
        return "= " + super.toString();
    }
}