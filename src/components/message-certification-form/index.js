import React from 'react';
import * as utilities from '../../util/utilities';
import './style.css';

export const MessageCertificationForm = (props) => {
    return (
        <form className="certification-form" onSubmit={props.onSubmit}>
            <textarea
                name="message"
                value={props.message}
                onChange={props.onChange}
                placeholder="Escribe aquí el mensaje para el que quieres generar la posdata..."
            />
            <select name="certifyingChar" value={props.certifyingChar} onChange={props.onChange}>
                <option key={'all'} value="all">
                    Firma oficial
                </option>
                {utilities.alphabetChars.map((character) => (
                    <option key={character} value={character}>
                        Firma con letra {character}
                    </option>
                ))}
            </select>
            <input type="submit" value="Generar posdata" />
        </form>
    );
};
