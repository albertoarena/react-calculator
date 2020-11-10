import React from "react";
import PropTypes from "prop-types";
import {GoX} from "react-icons/go";
import _ from "lodash";

import "./Modal.css";

export default class Modal extends React.Component {
    static propTypes = {
        header: PropTypes.object,
        headerClose: PropTypes.bool,
        body: PropTypes.object,
        footer: PropTypes.object,
        footerVisible: PropTypes.bool,
        css: PropTypes.string,
        visible: PropTypes.bool,
        clickHandler: PropTypes.func,
        style: PropTypes.object,
    };

    _headerClose() {
        if (this.props.headerClose !== false) {
            return (
                <button className="component-modal-close" onClick={this.props.clickHandler}>
                            <span>
                                <GoX/>
                            </span>
                </button>
            )
        }
        return "";
    }

    _footerCss() {
        return this.props.footerVisible === false ? "hidden" : "";
    }

    _footer() {
        if (this.props.footer) {
            return this.props.footer;
        } else {
            return (<p>
                <button onClick={this.props.clickHandler}>Close</button>
            </p>)
        }
    }

    render() {
        const rootClassName = [
            "component-modal-root",
            this.props.visible ? "visible" : "",
        ];

        const className = [
            "component-modal",
            this.props.css || "",
        ];

        const footerClassName = [
            "component-modal-footer",
            this._footerCss(),
        ]

        return (
            <div className={rootClassName.join(" ").trim()}>
                <div className="component-modal-mask">&nbsp;</div>
                <div className="component-modal-wrap">
                    <div className={className.join(" ").trim()} style={this.props.style || {}}>
                        {this._headerClose()}
                        <div className="component-modal-header">
                            {this.props.header}
                        </div>
                        <div className="component-modal-body">
                            {this.props.body}
                        </div>
                        <div className={footerClassName.join(" ").trim()}>
                            {this._footer()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}