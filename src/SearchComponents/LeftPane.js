import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import UserInfo from './SubComponents/user-info'
import Trends from './SubComponents/trends'
import FollowSuggestions from './SubComponents/follow-suggestions'
const styles ={};
class LeftPane extends Component {
    render() {
        return(
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <UserInfo/>
                </Grid>
                <Grid item>
                    <FollowSuggestions/>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(LeftPane)