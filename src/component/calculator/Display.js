import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        history: PropTypes.string,
        mode: PropTypes.string,
        exception: PropTypes.string,
        unit: PropTypes.string
    };

    render() {
        const className = [
            "component-display",
            !!this.props.exception ? "exception" : "",
        ];

        return (
            <div className={className.join(" ").trim()}>
                <div className="component-display-history">{this.props.history}</div>
                <div className="component-display-unit">{this.props.unit === "degrees" ? "Degrees" : ""}</div>
                <div className="component-display-result">{this.props.value}</div>
                <div className="component-display-exception">{this.props.exception}</div>
            </div>
        );
    }
}