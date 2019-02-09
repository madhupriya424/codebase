import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'Molu',
            password: 'ppp'
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(event, newValue) {
        this.setState({ username: newValue });
       // console.log(event);

    }

    onChangePassword(event, newValue) {
        this.setState({ password: newValue});
    }

    onSubmit(event) {
        let baseUrl = "http://localhost:4000";
        let payload={
            "username":this.state.username,
            "password":this.state.password
            }
        axios.post(baseUrl+'/login', payload) 
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });   
        console.log(this.state.username, this.state.password);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={this.onChangeUsername}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={this.onChangePassword}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={this.onSubmit} />
                    </div>
                </MuiThemeProvider>
            </div >
        );
    }
}

const style = {
    margin: 15,
   };

export default Login;