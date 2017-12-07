import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={};
class SmallLinks extends Component{
    render(){
        return(
            <Grid container style={{height:"8em",backgroundColor:"#ffffff"}}>
                <Grid item>
                    <Typography type="title">
                        Small Links
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SmallLinks)