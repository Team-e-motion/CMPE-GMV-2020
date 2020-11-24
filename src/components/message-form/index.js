import React from 'react';
import * as utilities from '../../util/utilities';

export const MessageCertificationForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <label>
                Message:
                <textarea name="message" value={props.message} onChange={props.onChange} />
            </label>
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
            <input type="submit" value="Submit" />
        </form>
    );
};
