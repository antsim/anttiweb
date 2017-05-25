import React, {Component} from 'react';
import SuperPrompt from './SuperPrompt'
import './SuperConsole.css';

class SuperConsole extends Component {
    render() {
        return (
            <div className="anco-container">
                <SuperPrompt label="C:\users\antti.simonen>" />
			</div>
        );
    }
}

export default SuperConsole;