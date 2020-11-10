const COMPACT_SPACE_MARKER = ':::';
const NO_SPACE_MARKER = ':~:';

const ROUND_DIGITS = 10;

const UNIT_DEFAULT = "radians";
const UNIT_RADIANS = "radians";
const UNIT_DEGREES = "degrees";

const PRECEDENCE_LOW = 1;
const PRECEDENCE_MEDIUM = 2;
const PRECEDENCE_HIGH = 3;

export default class Constants {

    static getCompactSpaceMarker() {
        return COMPACT_SPACE_MARKER;
    }

    static getNoSpaceMarker() {
        return NO_SPACE_MARKER;
    }

    static getUnitDefault() {
        return UNIT_DEFAULT;
    }

    static getUnitRadians() {
        return UNIT_RADIANS;
    }

    static getUnitDegrees() {
        return UNIT_DEGREES;
    }

    static getRoundDigits() {
        return ROUND_DIGITS;
    }
    
    static getPrecedenceLow() {
        return PRECEDENCE_LOW;
    }
    
    static getPrecedenceMedium() {
        return PRECEDENCE_MEDIUM;
    }
    
    static getPrecedenceHigh() {
        return PRECEDENCE_HIGH;
    }

}