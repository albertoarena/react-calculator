import React from "react";
import PropTypes from "prop-types";
import {GoGear} from "react-icons/go";

import "./BottomConfig.css";

export default class BottomConfig extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    render() {
        return (
            <div className="component-bottom-config">
                <button onClick={this.props.clickHandler}><GoGear /></button>
            </div>
        )
    }
}