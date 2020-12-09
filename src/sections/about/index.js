import React from 'react';
import Card from '../../components/cards/card';
import './style.css';

export const About = () => {
    return (
        <div className="body">
            <h1 className="header">Sobre nosotros</h1>
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
};
