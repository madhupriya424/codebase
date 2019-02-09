import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               Login Component
            </div >
        );
    }
}

const style = {
    margin: 15,
};

export default Login;