import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Home } from '../home';
import { Certify } from '../certify';
import Validate from '../validate';
import { About } from '../about';

export const NavRouter = () => {
    return (
        <BrowserRouter>
            <nav>
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
                <Route exact path="/CMPE-GMV-2020" component={Home} />
                <Route exact path="/CMPE-GMV-2020/certify" component={Certify} />
                <Route exact path="/CMPE-GMV-2020/validate" component={Validate} />
                <Route exact path="/CMPE-GMV-2020/about" component={About} />
            </nav>
        </BrowserRouter>
    );
};
