import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid'
import NavBar from './Components/NavBar'
import LeftPane from './Components/LeftPane'
import CenterPane from './Components/CenterPane'
import RightPane from './Components/RightPane'
class App extends Component {
  render() {
      const classes = this.props.classes;
    return (
      <Grid container direction="row" spacing={0}>
          <Grid item xs={12}>
              <NavBar/>
          </Grid>
          <Grid item xs={3}>
              <LeftPane/>
          </Grid>
          <Grid item xs={6}>
              <CenterPane/>
          </Grid>
          <Grid item xs={3}>
              <RightPane/>
          </Grid>
      </Grid>
    );
  }
}

export default App;
