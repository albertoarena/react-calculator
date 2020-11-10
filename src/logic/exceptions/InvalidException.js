import BaseException from "./BaseException";

export default class InvalidException extends BaseException {

    constructor() {
        super("Invalid");
    }

}