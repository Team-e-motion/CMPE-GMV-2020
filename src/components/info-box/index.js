import React from 'react';
import './style.css';

export const InfoBox = () => {
    return (
        <div className="infoBox">
            <h4>Comunicado del equipo e-motion:</h4>
            <p>
                En esta página encontrarás nuestra propuesta de solución al problema planteado por
                la empresa <a href="https://www.gmv.com/es/">GMV</a> en la{' '}
                <a href="https://matematicas.ucm.es/modelizacion-de-problemas-de-empresas">
                    2º Edición del Concurso de Modelización de Problemas de Empresa
                </a>{' '}
                organizado por la Facultad de Matemáticas de la{' '}
                <a href="https://www.ucm.es/">Universidad Complutense de Madrid</a> por parte de
                nuestro equipo.{' '}
            </p>
            <p>
                Utilizando la barra de navegación podrás certificar/firmar un mensaje, verificar que
                la firma para un mensaje es correcta o conocer más detalles sobre nuestro equipo.
            </p>
            <p>
                También te animamos a descargar el PDF con el documento teórico desarrollando
                nuestra propuesta a solución. Para ello, haz click sobre el icono de PDF que aparece
                debajo de este mensaje.
            </p>
        </div>
    );
};
