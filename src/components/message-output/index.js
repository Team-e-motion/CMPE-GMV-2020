import React from 'react';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const MessageOutput = (props) => {
    return (
        <div className="message-output">
            <p>
                {props.visible === true ? (props.loading === true ? 'Loading' : props.message) : ''}
            </p>
            {props.clipboard ? (
                <CopyToClipboard text={props.message}>
                    <button>Copy to clipboard </button>
                </CopyToClipboard>
            ) : null}
        </div>
    );
};
