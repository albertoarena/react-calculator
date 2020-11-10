export default class BaseException {

    /**
     *
     * @type {string}
     * @private
     */
    _message = "";

    constructor(message) {
        this._message = message || "";
    }

    getMessage = () => {
        return this._message;
    }
}