import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import UserInfo from './SubComponents/user-info'
import Trends from './SubComponents/trends'
const styles ={};
class LeftPane extends Component {
    render() {
        return(
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <UserInfo/>
                </Grid>
                <Grid item>
                    <Trends/>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(LeftPane)