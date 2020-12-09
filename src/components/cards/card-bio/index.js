import React from 'react';
import './style.css';

export default class CardBio extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bioContainer">
                <p className="bio">{this.props.bio}</p>
            </div>
        );
    }
}
