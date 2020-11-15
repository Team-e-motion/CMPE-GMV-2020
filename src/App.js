import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Contact from "./components/contact";
import About from "./components/about";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
