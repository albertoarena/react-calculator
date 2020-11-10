export default class Entity {

    constructor() {
        if (this.constructor === Entity) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    /**
     * Get type
     *
     * @return string
     */
    getType() {
        throw new Error("Method 'getType' must be implemented.");
    }

    /**
     * Get string order, when the calculation is represented by a string
     * 1: right side (default), -1: left side
     *
     * @return {number}
     */
    getStringOrder() {
        return 1;
    }

    /**
     * If true, no space will be inserted between the digit and the operator
     *
     * @return {boolean}
     */
    getStringNoSpacing() {
        return false;
    }

    /**
     * Used only with getStringOrder() --> -1
     * If return true, the number is put between parenthesis in string representation
     *
     * @return {boolean}
     */
    getStringBrackets() {
        return false;
    }

    /**
     *
     * @return {string}
     */
    toFullString() {
        return this.toString();
    }

}