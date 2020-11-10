import React from "react";
import PropTypes from "prop-types";
import {GoQuestion} from "react-icons/go";

import "./BottomHelp.css";

export default class BottomHelp extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    render() {
        return (
            <div className="component-bottom-help">
                <button onClick={this.props.clickHandler}><GoQuestion /></button>
            </div>
        )
    }

}