import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class QRCodeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Ajay Bhatt',
        };
    }

    render() {
        return (
            <div>
                <QRCode value={this.state.text} />
            </div>
        );
    }
}

export default QRCodeGenerator;