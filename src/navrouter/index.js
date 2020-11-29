import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Home } from '../sections/home';
import { Certify } from '../sections/certify';
import { Validate } from '../sections/validate';
import { About } from '../sections/about';
import './style.css';

const routes = [
    { path: '/CMPE-GMV-2020', name: 'Inicio', Component: Home },
    { path: '/CMPE-GMV-2020/certify', name: 'Certificar', Component: Certify },
    { path: '/CMPE-GMV-2020/validate', name: 'Verificar', Component: Validate },
    { path: '/CMPE-GMV-2020/about', name: 'Sobre nosotros', Component: About }
];

export const NavRouter = () => {
    return (
        <BrowserRouter>
            <nav className="nav-router">
                <ul>
                    {routes.map((route) => (
                        <li key={route.path}>
                            <NavLink
                                key={route.path}
                                exact
                                to={route.path}
                                className="nav-item"
                                activeClassName="is-active">
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path} component={Component} />
            ))}
        </BrowserRouter>
    );
};
