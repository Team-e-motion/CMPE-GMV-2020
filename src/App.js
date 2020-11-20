import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import About from './components/about';
import Certify from './components/certify';
import Validate from './components/validate';
import Home from './components/home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Switch>
                        <Route exact path="/CMPE-GMV-2020" component={Home} />
                        <Route path="/CMPE-GMV-2020/certify" component={Certify} />
                        <Route path="/CMPE-GMV-2020/validate" component={Validate} />
                        <Route path="/CMPE-GMV-2020/about" component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
