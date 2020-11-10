import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
        unitClickHandler: PropTypes.func,
        mode: PropTypes.string,
        unit: PropTypes.string,
    };

    handleClick = (buttonName, buttonId) => {
        this.props.clickHandler(buttonName, buttonId);
    };

    handleUnitClick = (buttonName, buttonId) => {
        this.props.unitClickHandler(this.props.unit === "radians" ? "degrees" : "radians");
    };

    render = () => {
        const className = [
            "component-button-panel",
            this.props.mode === "extended" ? "extended" : "",
        ];

        const unitLabel = this.props.unit === "radians" ? <span>Radians</span> : <span>Degrees</span>;

        return (
            <div className={className.join(" ").trim()}>
                <div>
                    {/*<Button name="" clickHandler={this.handleClick} small grey disabled extended/>*/}
                    <Button name="unit" label={unitLabel} clickHandler={this.handleUnitClick} small grey wide extended/>
                    <Button name="sqr2" label={<span>&#8730;</span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="clear" label={<span>AC</span>} clickHandler={this.handleClick} grey/>
                    {/*<Button name="parenthesis" label="()" clickHandler={this.handleClick} grey/>*/}
                    <Button name="negative" label={<span>+/-</span>} clickHandler={this.handleClick} grey/>
                    <Button name="percentage" label={<span>%</span>} clickHandler={this.handleClick} grey/>
                    <Button name="divide" label={<span>÷</span>} clickHandler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name="sin" clickHandler={this.handleClick} small grey extended/>
                    <Button name="cos" clickHandler={this.handleClick} small grey extended/>
                    <Button name="tan" clickHandler={this.handleClick} small grey extended/>
                    <Button name="7" clickHandler={this.handleClick}/>
                    <Button name="8" clickHandler={this.handleClick}/>
                    <Button name="9" clickHandler={this.handleClick}/>
                    <Button name="multiply" label={<span>x</span>} clickHandler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name="natural_logarithm" label={<span>ln</span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="log" label={<span>log</span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="1/x" clickHandler={this.handleClick} small grey extended disabled/>
                    <Button name="4" clickHandler={this.handleClick}/>
                    <Button name="5" clickHandler={this.handleClick}/>
                    <Button name="6" clickHandler={this.handleClick}/>
                    <Button name="subtract" label={<span>-</span>} clickHandler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name="pow_euler" label={<span>e<sup>x</sup></span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="pow2" label={<span>x<sup>2</sup></span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="powy" label={<span>x<sup>y</sup></span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="1" clickHandler={this.handleClick}/>
                    <Button name="2" clickHandler={this.handleClick}/>
                    <Button name="3" clickHandler={this.handleClick}/>
                    <Button name="add" label={<span>+</span>} clickHandler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name="factorial" label={<span>x!</span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="pi" label={<span>&pi;</span>} clickHandler={this.handleClick} small grey extended/>
                    <Button name="euler" label={<span>e</span>} clickHandler={this.handleClick} small grey extended/>
                    {/*<Button name="negative" label="+/-" clickHandler={this.handleClick} grey/>*/}
                    <Button name="0" clickHandler={this.handleClick} wide/>
                    <Button name="." clickHandler={this.handleClick}/>
                    <Button name="equals" label={<span>=</span>} clickHandler={this.handleClick} orange/>
                </div>
            </div>
        );

        // if (this.props.mode === "basic") {
        //     return this.renderBasic()
        // } else if (this.props.mode === "extended") {
        //     return this.renderExtended()
        // } else {
        //     return (
        //         <div className="component-button-panel">
        //             <div>
        //                 Unknown mode
        //             </div>
        //         </div>
        //     );
        // }
    }
}