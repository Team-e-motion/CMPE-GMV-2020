import React, { Component } from 'react';
import './App.css';
import { NavRouter } from './navrouter';

class App extends Component {
    render() {
        return (
            <div className="area">
                <ul className="boxes">
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <li className="backgroundBox"></li>
                    <NavRouter />
                </ul>
            </div>
        );
    }
}

export default App;
