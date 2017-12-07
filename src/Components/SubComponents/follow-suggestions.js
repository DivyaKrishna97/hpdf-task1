import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={};
class FollowSuggestions extends Component{
    render(){
        return(
            <Grid container style={{height:"18em",backgroundColor:"#ffffff"}}>
                <Grid item>
                    <Typography type="title">
                        Follow Suggestions
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(FollowSuggestions)