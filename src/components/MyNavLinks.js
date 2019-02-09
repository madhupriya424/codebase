import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import ToolbarGroup from '@material-ui/core/Toolbar';
import FlatButton from '@material-ui/core/Button';


const MyNavLinks = () => (
    <ToolbarGroup>
      <FlatButton label="Dashboard" containerElement={<Link to="dashboard"/>}/>
      <FlatButton label="Settings" containerElement={<Link to="settings" />}/>
      <FlatButton label="Profile" containerElement={<Link to="profile" />}/>
    </ToolbarGroup> 
  );

  export default MyNavLinks;