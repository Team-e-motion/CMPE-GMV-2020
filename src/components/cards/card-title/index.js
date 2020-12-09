import React from 'react';
import './style.css';

export default class CardTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="titleDiv">
                <h1 id={this.props.targetId} className="titleStyle">
                    {this.props.title}
                </h1>
                <h4 className="subTitleStyle">{this.props.subTitle}</h4>
            </div>
        );
    }
}
