import React from 'react';
import { MessageCertificationForm } from '../../components/message-certification-form';
import { MessageOutput } from '../../components/message-output';
import { certifyMessage } from '../../algorithm/certify';
import './style.css';

export class Certify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            certifyingChar: 'all',
            outputVisible: false,
            outputLoading: false,
            outputMessage: '',
            clipboard: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.generatePostscript = this.generatePostscript.bind(this);
    }

    generatePostscript(message, certifyingChar) {
        const output = certifyMessage(message, certifyingChar);
        this.setState({ outputMessage: output });
        this.setState({ outputVisible: true });
        this.setState({ clipboard: true });
    }

    handleSubmit(event) {
        const message = this.state.message;
        const certifyingChar = this.state.certifyingChar;

        this.generatePostscript(message, certifyingChar);

        event.preventDefault();
    }

    handleInputChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="certification-section">
                <MessageCertificationForm
                    onSubmit={this.handleSubmit}
                    onChange={this.handleInputChange}
                    message={this.state.message}
                    certifyingChar={this.state.certifyingChar}
                />
                <MessageOutput
                    visible={this.state.outputVisible}
                    loading={this.state.outputLoading}
                    message={this.state.message}
                    outputMessage={this.state.outputMessage}
                    clipboard={this.state.clipboard}
                />
            </div>
        );
    }
}
