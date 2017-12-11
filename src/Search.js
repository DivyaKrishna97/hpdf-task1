import React, { Component } from 'react';
import './App.css';
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import NavBar from './SearchComponents/NavBar'
import LeftPane from './SearchComponents/LeftPane'
import CenterPane from './SearchComponents/CenterPane'
import RightPane from './SearchComponents/RightPane'
const styles={
    dummyHeight:{
        height:"10em"
    }
};
class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            query:''
        }
    }
    componentDidMount(){
        this.setState({query:this.props.location.state.string});
     console.log(this.props.location.state.string);
    }
    render() {
        const classes = this.props.classes;
        return (
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12}>
                    <NavBar searchQuery={this.state.query}/>
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={24}>
                        <Grid item xs={3} className={classes.dummyHeight}>
                            <LeftPane/>
                        </Grid>
                        <Grid item xs={6} className={classes.dummyHeight} >
                            <CenterPane searchQuery={this.state.query}/>
                        </Grid>
                        <Grid item xs={3} className={classes.dummyHeight}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Search);

{/*            <Grid container justify="center" spacing={24}>
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
            </Grid>*/}