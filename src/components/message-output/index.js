import React from 'react';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const MessageOutput = (props) => {
    return (
        <div className="message-output">
            {props.clipboard ? (
                <CopyToClipboard text={props.message + '\n' + props.outputMessage}>
                    <button>Copiar el mensaje y la posdata al portapapeles</button>
                </CopyToClipboard>
            ) : null}
            <p>
                {props.visible === true
                    ? props.loading === true
                        ? 'Calculando la posdata...'
                        : props.outputMessage
                    : ''}
            </p>
        </div>
    );
};
