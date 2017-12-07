import React, { Component } from 'react';
import './App.css';
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import NavBar from './Components/NavBar'
import LeftPane from './Components/LeftPane'
import CenterPane from './Components/CenterPane'
import RightPane from './Components/RightPane'
const styles={
  dummyHeight:{
      height:"10em"
  }
};
class App extends Component {
  render() {
      const classes = this.props.classes;
    return (
        <Grid container justify="center" spacing={24}>
            <Grid item xs={12}>
                <NavBar/>
            </Grid>
            <Grid item xs={10}>
                <Grid container spacing={24}>
                    <Grid item xs={3} className={classes.dummyHeight}>
                        <LeftPane/>
                    </Grid>
                    <Grid item xs={6} className={classes.dummyHeight} >
                        <CenterPane/>
                    </Grid>
                    <Grid item xs={3} className={classes.dummyHeight}>
                        <RightPane/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(App);
