import PropTypes from "prop-types";

const keyboardKeys = {
    "Backspace": "clear",
    "Enter": "equals",
    "=": "equals",
    "+": "add",
    "-": "subtract",
    "/": "divide",
    "*": "multiply",
    "%": "percentage",
    "^": "pow2",
    ",": ".",
    "p": "pi",
    "e": "euler",
}

const controlKeys = {
    67: "copy",
    86: "paste",
    88: "clear",
}

export default class KeyboardInput {
    static propTypes = {
        click: PropTypes.func,
        clear: PropTypes.func,
        copy: PropTypes.func,
        paste: PropTypes.func,
    };

    constructor(props) {
        this.props = props;
    }

    handleKeyDown = (e) => {
        e.preventDefault();

        // Handles copy and paste
        let ctrlDown = e.ctrlKey || e.metaKey // Mac support

        // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
        if (ctrlDown && e.altKey) {
            // Nope
        } else if (ctrlDown) {
            if (e.keyCode && typeof this.props[controlKeys[e.keyCode]] === "function") {
                this.props[controlKeys[e.keyCode]]();
            }
        } else {
            // Translate keyboard keys, if necessary
            this.props.click(keyboardKeys[e.key] || e.key);
        }
    }
}