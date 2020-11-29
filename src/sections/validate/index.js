import React from 'react';
import { MessageOutput } from '../../components/message-output';
import { MessageValidationForm } from '../../components/message-validation-form';
import { isValidMessageWithPostscript } from '../../algorithm/verify';

export class Validate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            outputVisible: false,
            outputLoading: false,
            outputMessage: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        const isValid = isValidMessageWithPostscript(this.state.message);
        console.log('isValid: ', isValid);
        this.setState({
            outputMessage: isValid ? 'The postscript is valid' : 'The postscript is not valid'
        });
        this.setState({ outputVisible: true });
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
            <React.Fragment>
                <MessageValidationForm
                    onSubmit={this.handleSubmit}
                    onChange={this.handleInputChange}
                    message={this.state.message}
                />
                <MessageOutput
                    visible={this.state.outputVisible}
                    loading={this.state.outputLoading}
                    message={this.state.outputMessage}
                />
            </React.Fragment>
        );
    }
}
