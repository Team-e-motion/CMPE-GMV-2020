import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link className="appName" to="/">
                E-motion
            </Link>
            <ul className="menu">
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(NavBar);