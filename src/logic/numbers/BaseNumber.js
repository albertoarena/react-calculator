import Entity from "../Entity";
import _ from "lodash";
import Constants from "../Constants";

export default class BaseNumber extends Entity {

    value = 0;

    strValue = "";

    constructor(v, strValue) {
        super();
        this.value = Number(v);
        this.strValue = strValue || (!_.isNaN(this.value) ? this.value + "" : Number.NaN);
    }

    getType() {
        return "number";
    }

    /**
     *
     * @return {number|NaN}
     */
    getValue() {
        if (_.isNaN(this.value)) {
            return this.value;
        } else if (_.isInteger(this.value)) {
            return this.value;
        } else {
            return _.round(this.value, Constants.getRoundDigits());
        }
    }

    toString() {
        return this.strValue;
    }

}