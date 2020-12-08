import React from 'react';
import './style.css';

const bodyStyles = {
    background: '#a0a0fc',
    width: '100%',
    height: '100vh',
    overflowX: 'hidden'
};
const headerStyles = {
    textAlign: 'center',
    color: '#fff'
};
const cardContainerStyles = {
    width: '300px',
    height: '500px',
    background: '#fff',
    borderRadius: 35,
    boxShadow: '1px 1px 35px #444'
};
const imgContainerStyles = {
    backgroundColor: '#fff',
    height: '35%',
    margin: 0,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    background: '#444',
    backgroundSize: 'cover'
};
const avatarContainerStyles = {
    width: '150px',
    height: '150px',
    zIndex: '9',
    position: 'relative',
    top: '-85px',
    left: '65px',
    right: '0',
    margin: '0 auto',
    border: '10px solid #fff',
    background: '#000',
    backgroundSize: 'cover',
    display: 'inline-block',
    textAlign: 'center',
    borderRadius: '50%'
};
const titleStyles = {
    color: '#555',
    fontWeight: '100',
    outline: 'none',
    margin: '0px',
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    top: '-75px'
};
const subTitleStyles = {
    position: 'relative',
    top: '-95px',
    textAlign: 'center',
    fontWeight: '100',
    color: '#888'
};
const bioContainerStyles = {
    position: 'relative',
    top: '-95px'
};
const bioStyles = {
    color: '#444',
    padding: '0 30px',
    textAlign: 'center'
};
const imgStyles = {
    width: 300,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
};

const avatarImgStyles = {
    width: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    borderRadius: '50%'
};

// Components
class CardImg extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={imgContainerStyles} className="imgContainer">
                <img src={this.props.imgSrc} className="img" style={imgStyles}/>
            </div>
        );
    }
}
class CardAvatar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={avatarContainerStyles} className="infoContainer">
                <img src={this.props.avatarSrc} style={avatarImgStyles} />
            </div>
        );
    }
}
class CardTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="titleDiv">
                <h1 id={this.props.targetId} style={titleStyles} className="title">
                    {this.props.title}
                </h1>
                <h4 style={subTitleStyles} className="subTitle">
                    {this.props.subTitle}
                </h4>
            </div>
        );
    }
}
class CardBio extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={bioContainerStyles} className="bioContainer">
                <p style={bioStyles} className="bio">
                    {this.props.bio}
                </p>
            </div>
        );
    }
}

class Card extends React.Component {
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
            <div style={cardContainerStyles} className="cardFront cardContainer">
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
class CardContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={bodyStyles} className="body">
                <h1 style={headerStyles} className="header">
                    Sobre nosotros
                </h1>
                <div className="flex">
                    <Card
                        imgSrc="https://c4.wallpaperflare.com/wallpaper/151/30/574/space-stars-the-universe-space-wallpaper-preview.jpg"
                        avatarSrc="https://i.pinimg.com/originals/7f/d1/28/7fd128981d2df6449ad294f5aba5131d.png"
                        targetId="antonio"
                    />

                    <Card
                        type="arturo"
                        imgSrc="https://c4.wallpaperflare.com/wallpaper/151/30/574/space-stars-the-universe-space-wallpaper-preview.jpg"
                        avatarSrc="https://i.pinimg.com/originals/32/0c/7d/320c7dd2dc0117b3df1a0384dbecbbab.jpg"
                    />

                    <Card
                        type="inma"
                        imgSrc="https://c4.wallpaperflare.com/wallpaper/151/30/574/space-stars-the-universe-space-wallpaper-preview.jpg"
                        avatarSrc="https://i.pinimg.com/originals/69/94/d6/6994d6f82c1ebf7b1f4fd911d7ffd140.jpg"
                    />
                </div>
            </div>
        );
    }
}

export const About = () => {
    return (
        <div className="about-section">
            <CardContainer />
        </div>
    );
};
