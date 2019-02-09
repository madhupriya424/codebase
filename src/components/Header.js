import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import ToolbarGroup from '@material-ui/core/Toolbar';
import  MyNavLinks from './MyNavLinks';
import Home from './Home';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Link from '@material-ui/core/Link';
import Login from './Login';
class Header extends Component {
    
  

    constructor(props) {
        super(props);

        this.state = '';
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                    <AppBar position="static">
                    <Toolbar>
                      <Typography variant="h6" color="inherit">
                        Codebase
                      </Typography>
                      <Button color="inherit" onClick={()=> this.props.history.push("/login")} >Home</Button>
                      <Button color="inherit">Problems</Button>
                      <Button color="inherit">Contest</Button>
                      <Button color="inherit">Problem of the day</Button>
                      <Link component={Login} to="/login">
                      Link
                    </Link>                    
                      </Toolbar>
                  </AppBar>
                    
                        
                    </div>
                </MuiThemeProvider>
            </div >
        );
    }
}



export default Header;