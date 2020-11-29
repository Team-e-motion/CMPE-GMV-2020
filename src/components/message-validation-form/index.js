import React from 'react';
import './style.css';

export const MessageValidationForm = (props) => {
    return (
        <form className="validation-form" onSubmit={props.onSubmit}>
            <textarea
                name="message"
                value={props.message}
                onChange={props.onChange}
                placeholder="Write your message with the postscript you want to validate!"
            />
            <input type="submit" value="Validate" />
        </form>
    );
};
