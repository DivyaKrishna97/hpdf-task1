import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import FollowSuggestions from './SubComponents/follow-suggestions'
import SmallLinks from './SubComponents/small-links'
const styles ={};
class RightPane extends Component{
    render() {
        return (
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <FollowSuggestions/>
                </Grid>
                <Grid item>
                    <SmallLinks/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(RightPane)