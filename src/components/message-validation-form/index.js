import React from 'react';
import './style.css';

export const MessageValidationForm = (props) => {
    return (
        <form className="validation-form" onSubmit={props.onSubmit}>
            <textarea
                name="message"
                value={props.message}
                onChange={props.onChange}
                placeholder="Escribe el mensaje con su firma para verificar que está correctamente firmado..."
            />
            <input type="submit" value="Verificar" />
        </form>
    );
};
