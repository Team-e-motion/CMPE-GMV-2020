import React from 'react';

export const MessageValidationForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Message with postscript:</label>
            <textarea name="message" value={props.message} onChange={props.onChange} />
            <input type="submit" value="Submit" />
        </form>
    );
};
