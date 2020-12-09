import React from 'react';
import './style.css';

export default class CardImg extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="imgContainer">
                <img src={this.props.imgSrc} className="imgStyles" />
            </div>
        );
    }
}
