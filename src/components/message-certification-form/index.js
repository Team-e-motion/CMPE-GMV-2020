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
                placeholder="Write the message you want to certify!"
            />
            <select name="certifyingChar" value={props.certifyingChar} onChange={props.onChange}>
                <option key={'all'} value="all">
                    All letters
                </option>
                {utilities.alphabetChars.map((character) => (
                    <option key={character} value={character}>
                        {character}
                    </option>
                ))}
            </select>
            <input type="submit" value="Certify" />
        </form>
    );
};
