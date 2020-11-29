import React from 'react';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const MessageOutput = (props) => {
    return (
        <div className="message-output">
            <p>
                {props.visible === true
                    ? props.loading === true
                        ? 'Calculando la posdata...'
                        : props.outputMessage
                    : ''}
            </p>
            {props.clipboard ? (
                <CopyToClipboard text={props.message + '\n' + props.outputMessage}>
                    <button>Copiar el mensaje y la posdata al portapapeles</button>
                </CopyToClipboard>
            ) : null}
        </div>
    );
};
