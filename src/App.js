import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Typography } from '@material-ui/core'
import ArticlesGroup from './ArticlesGroup'

function App() {
  return (
    <>
        <AppBar position="static">
            <Typography variant="h6">Sports Warehouse</Typography> 
        </AppBar>    

        <ArticlesGroup></ArticlesGroup> 
    </>
  );
}

export default App;
