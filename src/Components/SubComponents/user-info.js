import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={
    header:{
    }
};

class UserInfo extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column" className={classes.header}>
                <Grid item style={{backgroundColor:"#1da1f2",height:"6em"}}>
                    <Typography type="title">
                        Header
                    </Typography>
                </Grid>
                <Grid item style={{backgroundColor:"#ffffff",height:"6em"}}>
                    <Typography type="title">
                        UserInfo
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(UserInfo)