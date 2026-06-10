import BaseOperator from "./BaseOperator";
import DivideByZeroException from "../exceptions/DivideByZeroException";
import Constants from "../Constants";

export default class ReciprocalOperator extends BaseOperator {
  getOperator() {
    return "1/x";
  }

  getPrecedence() {
    return Constants.getPrecedenceHigh();
  }

  getApplyImmediately() {
    return true;
  }

  run(value1, value2) {
    const x = value1 || value2 || 0;
    if (x === 0) {
      throw new DivideByZeroException();
    }
    return 1 / x;
  }

  toFullString() {
    return Constants.getNoSpaceMarker() + this.toString();
  }
}
