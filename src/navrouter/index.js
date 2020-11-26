import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Home } from '../sections/home';
import { Certify } from '../sections/certify';
import { Validate } from '../sections/validate';
import { About } from '../sections/about';
import './style.css';

export const NavRouter = () => {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/CMPE-GMV-2020">Home</Link>
                    </li>
                    <li>
                        <Link to="/CMPE-GMV-2020/certify">Certify</Link>
                    </li>
                    <li>
                        <Link to="/CMPE-GMV-2020/validate">Validate</Link>
                    </li>
                    <li>
                        <Link to="/CMPE-GMV-2020/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/CMPE-GMV-2020" component={Home} />
            <Route exact path="/CMPE-GMV-2020/certify" component={Certify} />
            <Route exact path="/CMPE-GMV-2020/validate" component={Validate} />
            <Route exact path="/CMPE-GMV-2020/about" component={About} />
        </BrowserRouter>
    );
};
