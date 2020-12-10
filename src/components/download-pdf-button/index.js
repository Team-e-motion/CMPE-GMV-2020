import React from 'react';
import './style.css';

export const DownloadPDFButton = (props) => {
    return (
        <div className="downloadPDFButton">
            <a href={props.pathToFile} download>
                <span>Descargar</span>
                <span>PDF</span>
            </a>
        </div>
    );
};
