import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Home } from '../sections/home';
import { Certify } from '../sections/certify';
import { Validate } from '../sections/validate';
import { About } from '../sections/about';
import './style.css';

export const NavRouter = () => {
    return (
        <BrowserRouter>
            <nav className="nav-router">
                <ul>
                    <li>
                        <NavLink
                            exact
                            to="/CMPE-GMV-2020"
                            className="nav-item"
                            activeClassName="is-active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/CMPE-GMV-2020/certify"
                            className="nav-item"
                            activeClassName="is-active">
                            Certify
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/CMPE-GMV-2020/validate"
                            className="nav-item"
                            activeClassName="is-active">
                            Validate
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/CMPE-GMV-2020/about"
                            className="nav-item"
                            activeClassName="is-active">
                            About
                        </NavLink>
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
