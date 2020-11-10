import React from "react";
import PropTypes from "prop-types";

import "./BottomPanel.css";
import Mode from "./Mode";
import BottomHelp from "./BottomHelp";
import BottomConfig from "./BottomConfig";


export default class BottomPanel extends React.Component {
    static propTypes = {
        mode: PropTypes.string,
        modeClickHandler: PropTypes.func,
        helpClickHandler: PropTypes.func,
        configClickHandler: PropTypes.func,
    };

    render() {
        return (
            <div className="component-bottom-panel">
                <BottomHelp clickHandler={this.props.helpClickHandler} />
                {/*<BottomConfig clickHandler={this.props.configClickHandler} />*/}
                <Mode mode={this.props.mode} clickHandler={this.props.modeClickHandler} />
            </div>
        );
    }

}