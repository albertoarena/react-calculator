import React from "react";
import Display from "./calculator/Display";
import ButtonPanel from "./calculator/ButtonPanel";
import BottomPanel from "./calculator/BottomPanel";

import "./App.css";
import Calculator from "../logic/Calculator";
import ConfigModal from "./modals/ConfigModal";
import HelpModal from "./modals/HelpModal";
import KeyboardInput from "../logic/ui/KeyboardInput";

export default class App extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null,
        history: null,
        mode: "basic",
        help: false,
        config: false,
        exception: null,
        unit: "radians",
    }

    calculator = new Calculator({
        unit: this.state.unit,
        debug: false,
    })

    copy = () => {
        this.calculator.copy();
        this.setState(this.calculator.getResult());
    }

    paste = () => {
        this.calculator.paste();
        this.setState(this.calculator.getResult());
    }

    clear = () => {
        this.calculator.clear();
        this.setState(this.calculator.getResult());
    }

    handleClick = (buttonName, buttonId) => {
        this.setState(this.calculator.calculate(buttonName));
    }

    handleModeClick = (value) => {
        this.setState({mode: value});
    }

    handleHelpClick = () => {
        this.setState({help: !this.state.help});
    }

    handleConfigClick = () => {
        this.setState({config: !this.state.config});
    }

    handleUnitClick = (value) => {
        this.setState({unit: value});
        this.calculator.setUnit(value);
    }

    // Keyboard input object
    keyboardInput = new KeyboardInput({
        copy: this.copy,
        paste: this.paste,
        clear: this.clear,
        click: this.handleClick,
    })

    render() {
        return (
            <div className="component-app" onKeyDown={this.keyboardInput.handleKeyDown} tabIndex="1">
                <Display value={this.state.next || this.state.total || "0"}
                         history={this.state.history || ""}
                         unit={this.state.unit}
                         exception={this.state.exception}
                />
                <ButtonPanel mode={this.state.mode}
                             unit={this.state.unit}
                             clickHandler={this.handleClick}
                             unitClickHandler={this.handleUnitClick}
                />
                <BottomPanel mode={this.state.mode}
                             modeClickHandler={this.handleModeClick}
                             helpClickHandler={this.handleHelpClick}
                             configClickHandler={this.handleConfigClick}
                />
                <ConfigModal visible={this.state.config} clickHandler={this.handleConfigClick}/>
                <HelpModal visible={this.state.help} clickHandler={this.handleHelpClick}/>
            </div>
        );
    }
}