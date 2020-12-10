import React from 'react';
import Card from '../../components/cards/card';
import './style.css';

export const About = () => {
    return (
        <div className="body">
            <div className="flex">
                <Card
                    imgSrc={process.env.PUBLIC_URL + '/images/background/default.jpg'}
                    avatarSrc={process.env.PUBLIC_URL + '/images/avatar/antonio_avatar.png'}
                    targetId="antonio"
                />

                <Card
                    type="arturo"
                    imgSrc={process.env.PUBLIC_URL + '/images/background/default.jpg'}
                    avatarSrc={process.env.PUBLIC_URL + '/images/avatar/arturo_avatar.png'}
                />

                <Card
                    type="inma"
                    imgSrc={process.env.PUBLIC_URL + '/images/background/default.jpg'}
                    avatarSrc={process.env.PUBLIC_URL + '/images/avatar/inma_avatar.png'}
                />
            </div>
        </div>
    );
};
