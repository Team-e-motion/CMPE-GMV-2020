import React from 'react';

const About = () => {
    return (
        <div className="About">
            {/* This info is just temporary */}
            <p>
                Este proyecto representa la implementación de una solución a la propuesta de la
                empresa empresa en el Concurso de Modelización de Problemas de Empresa organizado
                por la{' '}
                <a href="https://matematicas.ucm.es/modelizacion-de-problemas-de-empresas">
                    Facultad de Matemática Matemática
                </a>{' '}
                de la <a href="https://www.ucm.es/">Universidad Complutense de Madrid (UCM)</a>.
                <ul>
                    <li>
                        <a href="mailto:ahacua@ucm.es">Antonio Acuaviva Huertos</a>
                    </li>
                    <li>
                        <a href="mailto:arturac@ucm.es">Arturo Acuaviva Huertos</a>
                    </li>
                    <li>
                        <a href="mailto:inmape01@ucm.es">Inmaculada Pérez Garbín</a>
                    </li>
                </ul>
            </p>
        </div>
    );
};

export default About;
