import React from "react";
import PropTypes from "prop-types";

import "./Mode.css";

export default class Mode extends React.Component {
    static propTypes = {
        mode: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    handleClick = (mode) => {
        this.props.clickHandler(mode);
    };

    render() {
        const className = [
            "component-mode",
            this.props.mode || "",
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={() => this.handleClick("basic")} className={this.props.mode === "basic" ? "selected" : ""}>Basic</button>
                <button onClick={() => this.handleClick("extended")} className={this.props.mode === "extended" ? "selected" : ""}>Extended</button>
            </div>
        )
    }
}
