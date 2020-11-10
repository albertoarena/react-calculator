import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

import "./ConfigModal.css";

export default class ConfigModal extends React.Component {
    static propTypes = {
        visible: PropTypes.bool,
        clickHandler: PropTypes.func,
    };

    _position() {
        return {
            top: "auto",
            position: "absolute",
            bottom: 50,
            right: 50,
        }
    }

    _header() {
        return (<p>
            Configuration
        </p>)
    }

    _body() {
        return (<p>
            <label>Style</label>
            <select>
                <option>Mac</option>
                <option>Windows</option>
            </select>
        </p>)
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                // style={this._position()}
                css="component-config-modal"
                header={this._header()}
                body={this._body()}
                clickHandler={this.props.clickHandler}
            />
        )
    }

}