import React, {Component} from 'react';
import SuperMessage from './SuperMessage';
import './SuperPrompt.css';

class SuperPrompt extends Component {
    constructor(props) {
        super(props);
        this.state = {argument: "", messages: []};
    }

    process = (command) => {
        var m = this.state.messages;
        m.push(<SuperMessage message={this.state.argument} />);
        this.setState({messages:m});
    }

    keydown = (key) => {
        switch (key.keyCode) {
            case 13:
                this.process(this.state.argument);
                this.setState({argument: ""});
                this.sourceText.value = "";
                break;
            default:
                this.setState({argument:this.state.argument + key.key});
        }
    }

    render() {
        return (
            <div>
                {this.state.messages}
                <span className="sc-prompt-label">{this.props.label}</span>
                <span 
                    ref={ref => this.arguments = ref}
                    className="sc-prompt-arguments" >{this.state.argument}</span>
                <span className="sc-prompt-cursor">&nbsp;</span>
                <br />
                <textarea 
                    ref={ref => this.sourceText = ref}
                    onKeyDown={this.keydown}></textarea>
            </div>
        );
    }
}

export default SuperPrompt