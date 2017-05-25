import React, {Component} from 'react';
import './SuperMessage.css';

class SuperMessage extends Component {
    render() {
        return (
            <div className="sc-message-container">
                {this.props.message}
            </div>
        );
    }
}

export default SuperMessage