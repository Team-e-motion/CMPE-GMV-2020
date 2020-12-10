import React from 'react';
import './style.css';
import { InfoBox } from '../../components/info-box';
import { DownloadPDFButton } from '../../components/download-pdf-button';

export const Home = () => {
    return (
        <div className="home-section">
            <InfoBox />
            <DownloadPDFButton
                pathToFile={process.env.PUBLIC_URL + '/doc/Memoria e-motion GMV.pdf'}
            />
        </div>
    );
};
