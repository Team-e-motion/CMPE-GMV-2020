import React from 'react';
import './style.css';

export default class CardAvatar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="infoContainer">
                <img src={this.props.avatarSrc} className="avatarImgStyles" />
            </div>
        );
    }
}
