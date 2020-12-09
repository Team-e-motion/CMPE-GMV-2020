import React from 'react';
import CardImg from '../card-image';
import CardAvatar from '../card-avatar';
import CardTitle from '../card-title';
import CardBio from '../card-bio';
import './style.css';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Antonio Acuaviva',
            subTitle: 'antoacua@ucm.es',
            bio: 'Estudiante de Matemáticas y Física en la Universidad Complutense de Madrid.',
            direction: 'forwards'
        };
    }
    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        if (this.props.type === 'arturo') {
            this.setState({
                title: 'Arturo Acuaviva',
                subTitle: 'arturacu@ucm.es',
                bio:
                    'Estudiante de Ingeniería Informática y Matemáticas en la Universidad Complutense de Madrid.'
            });
        } else if (this.props.type === 'inma') {
            this.setState({
                title: 'Inmaculada Pérez',
                subTitle: 'inmape01@ucm.es',
                bio:
                    'Estudiante de Ingeniería Informática y Matemáticas en la Universidad Complutense de Madrid.'
            });
        }
    }
    render() {
        return (
            <div className="cardFront cardContainer">
                <CardImg imgSrc={this.props.imgSrc} />
                <CardAvatar avatarSrc={this.props.avatarSrc} />
                <CardTitle
                    targetId={this.props.targetId}
                    title={this.state.title}
                    subTitle={this.state.subTitle}
                />
                <CardBio bio={this.state.bio} />
            </div>
        );
    }
}
