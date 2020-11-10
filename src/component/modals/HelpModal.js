import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

import "./HelpModal.css"

export default class HelpModal extends React.Component {
    static propTypes = {
        visible: PropTypes.bool,
        clickHandler: PropTypes.func,
    };

    _style() {
        return {
            top: "auto",
            position: "absolute",
            bottom: 50,
            left: 50,
            width: "50%"
        }
    }

    _header() {
        return (<p>
            Help
        </p>)
    }

    _body() {
        return (<section className="component-help-table">
            <header>
                <div className="col">Key</div>
                <div className="col">Description</div>
            </header>
            <div className="row">
                <div className="col">ctrl+C / cmd+C</div>
                <div className="col">Copy</div>
            </div>
            <div className="row">
                <div className="col">ctrl+V / cmd+V</div>
                <div className="col">Paste</div>
            </div>
            <div className="row">
                <div className="col">ctrl+X / cmd+x / esc</div>
                <div className="col">Clear (as clicking AC)</div>
            </div>
            <div className="row">
                <div className="col">p</div>
                <div className="col">Pi</div>
            </div>
            <div className="row">
                <div className="col">e</div>
                <div className="col">Euler constant (<strong>e</strong>)</div>
            </div>
        </section>)
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                // style={this._style()}
                css="component-help-modal"
                header={this._header()}
                body={this._body()}
                footerVisible={false}
                clickHandler={this.props.clickHandler}
            />
        )
    }

}