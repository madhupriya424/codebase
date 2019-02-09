import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               Home Component
            </div >
        );
    }
}

const style = {
    margin: 15,
};

export default Home;