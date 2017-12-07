import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={};
class Feed extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item style={{backgroundColor:"#ffffff",height:"70vh"}}>
                    <Typography type="title">
                        News Feed
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Feed)