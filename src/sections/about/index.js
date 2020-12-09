import React from 'react';
import Card from '../../components/cards/card';
import './style.css';

export const About = () => {
    return (
        <div className="body">
            <div className="flex">
                <Card
                    imgSrc="https://c4.wallpaperflare.com/wallpaper/151/30/574/space-stars-the-universe-space-wallpaper-preview.jpg"
                    avatarSrc="https://octodex.github.com/images/spidertocat.png"
                    targetId="antonio"
                />

                <Card
                    type="arturo"
                    imgSrc="https://c4.wallpaperflare.com/wallpaper/151/30/574/space-stars-the-universe-space-wallpaper-preview.jpg"
                    avatarSrc="https://i.pinimg.com/originals/73/ed/50/73ed50d9bfde8459aa2407f561224508.png"
                />

                <Card
                    type="inma"
                    imgSrc="https://c4.wallpaperflare.com/wallpaper/151/30/574/space-stars-the-universe-space-wallpaper-preview.jpg"
                    avatarSrc="https://octodex.github.com/images/femalecodertocat.png"
                />
            </div>
        </div>
    );
};
