import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import About from './components/about';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Switch>
                        {/* <Route exact path="/CMPE-GMV-2020" component={Home} />
                <Route path="/CMPE-GMV-2020/firmar-mensaje" component={Sign} />
                <Route path="/CMPE-GMV-2020/comprobar-firma" component={Validate} /> */}
                        <Route path="/CMPE-GMV-2020/quienes-somos" component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
