import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={};

class UserInfo extends Component{
    render(){
        return(
            <Grid container>
                <Grid item>
                    <Typography type="title">
                        User Info Grid
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(UserInfo)