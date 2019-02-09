import React, { Component } from 'react';
import './App.css';
//import Login from './Login';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/signup" component={Signup} exact/>
            <Route  component={Error} />
            </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}



export default App;
