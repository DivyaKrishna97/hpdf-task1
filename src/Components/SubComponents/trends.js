import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={};

class Trends extends Component{
    render(){
        return(
            <Grid container>
                <Grid item>
                    <Typography type="title">
                        Trends Grid
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Trends)