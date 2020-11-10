import BaseException from "./BaseException";

export default class DivideByZeroException extends BaseException {

    constructor() {
        super("Divide by zero");
    }

}