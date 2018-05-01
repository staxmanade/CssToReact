import React from 'react';
import ReactDOM from 'react-dom';

import {transform} from './transform';

type InputProps = {
    value: string,
    placeholder: string,
    onChange: (event) => void
};
type InputState = {};

class Input extends React.Component<InputProps, InputState> {
    componentDidUpdate(prevProps) {
        var node = ReactDOM.findDOMNode(this) as HTMLInputElement; // reference: https://github.com/Microsoft/TypeScript/issues/10453#issuecomment-301263769
        var oldLength = node.value.length;
        var oldIdx = node.selectionStart;
        node.value = this.props.value;
        var newIdx = Math.max(0, node.value.length - oldLength + oldIdx);
        node.selectionStart = node.selectionEnd = newIdx;
    }

    render() {
        return <textarea cols={40} rows={20} {...this.props} value={undefined}/>;
    }
}

var initialStarterText = "";

type AppProps = {};
type AppState = {
    inputText: string,
    outputText: string,
    error?: string,
    shouldFormat: boolean
};

export default class App extends React.Component<AppProps, AppState> {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.inputTextUpdate = this.inputTextUpdate.bind(this);

        this.state = {
            inputText: initialStarterText,
            outputText: "",
            shouldFormat: false
        }
    }

    componentDidMount() {
        // TODO: remove me...
        this.update();
    }

    inputTextUpdate(e) {
        this.setState({
            inputText: e.target.value
        }, () => {
            this.update();
        });
    }

    update(shouldFormat = this.state.shouldFormat) {

        console.log('update', arguments);

        if (this.state.inputText === initialStarterText) {
            this.setState({
                inputText: initialStarterText,
                error: null
            });
            return;
        }

        try {
            var transformed = transform(this.state.inputText);

            var result = JSON.stringify(transformed, null, shouldFormat ? 2 : 0);
            this.setState({
                outputText: result,
                error: null,
                shouldFormat
            });
        } catch (ex) {
            this.setState({
                error: ex
            });
        }
    }

    render() {
        var outputCssStyle = this.state.error ? {
            "backgroundColor": "lightcoral"
        } : null;
        console.log('state', this.state);
        var inputText = this.state.inputText;
        var outputText = this.state.error || this.state.outputText;

        return (
            <div style={{"textAlign": "center"}}>
                <Input ref='inputCss' placeholder="Type or paste CSS here..." onChange={this.inputTextUpdate}
                       value={inputText}/>
                <textarea ref='outputCss' cols={40} rows={20} style={outputCssStyle} value={outputText}/>
                <br/>
                <input style={{"marginLeft": "266px"}} ref="useNewline" checked={this.state.shouldFormat}
                       type="checkbox" onChange={e => {
                    // e.preventDefault();
                    console.log(`isChecked: ${e.target.checked}`);
                    // this.setState({shouldFormat: e.target.checked});
                    this.update(e.target.checked);
                }}/> Format
            </div>
        );
    }
}
