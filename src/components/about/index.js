import React from 'react';

const About = () => {
    return (

        <div className="About">
            {/* This info is just temporary */}
            <h4 className="center">About the project</h4>
            <p>
                This project is part of Business Problem Modelling Contest at Mathematics Faculty (Complutense
                University of Madrid). To learn more about the Contest, visit its <a href="https://matematicas.ucm.es/modelizacion-de-problemas-de-empresas">webpage</a>
                Feel free to contact e-motion team to gain insight on the project or just to share any thoughts!
                <ul>
                    <li><a href="mailto:ahacua@ucm.es">Antonio Acuaviva Huertos</a></li>
                    <li><a href="mailto:arturac@ucm.es">Arturo Acuaviva Huertos</a></li>
                    <li><a href="mailto:inmape01@ucm.es">Inmaculada Pérez Garbín</a></li>
                </ul>
            </p>
        </div>
    );
};

export default About;