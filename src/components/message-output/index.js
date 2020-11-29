import React from 'react';
import './style.css';

export const MessageOutput = (props) => {
    return (
        <div className="message-output">
            <p>
                {props.visible === true ? (props.loading === true ? 'Loading' : props.message) : ''}
            </p>
        </div>
    );
};
