import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username : 'Molu',
            password : 'ppp'
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(event){
        this.setState({username: event.target.value});
        //console.log(event.target.value);
    }

    onChangePassword(event){  
        this.setState({password: event.target.value}); 
    }

    onSubmit(event){
        console.log(this.state.username, this.state.password);
    }

    render(){
        return (
            <div>
                Username:
                <input type="text" value={this.state.username} onChange={this.onChangeUsername}/>
                <br />
                Password: 
                <input type="text"  value={this.state.password} onChange={this.onChangePassword}/>
                <br />
                <button type="submit" onClick={this.onSubmit}> Submit </button>
            </div>
        );
    }
}

export default Login;