import React from 'react';

export const MessageOutput = (props) => {
    return (
        <div>
            {props.visible === true ? (props.loading === true ? 'Loading' : props.message) : ''}
        </div>
    );
};
