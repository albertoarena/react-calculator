import React from "react";
import PropTypes from "prop-types";

import "./Button.css"

export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.string,
        label: PropTypes.object,
        grey: PropTypes.bool,
        orange: PropTypes.bool,
        small: PropTypes.bool,
        wide: PropTypes.bool,
        disabled: PropTypes.bool,
        extended: PropTypes.bool,
        clickHandler: PropTypes.func
    };

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        const className = [
            "component-button",
            this.props.grey ? "grey" : "",
            this.props.orange ? "orange" : "",
            this.props.small ? "small" : "",
            this.props.wide ? "wide" : "",
            this.props.disabled ? "disabled" : "",
            this.props.extended ? "extended" : "",
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick} disabled={this.props.disabled}>{this.props.label || this.props.name}</button>
            </div>
        );
    }

}