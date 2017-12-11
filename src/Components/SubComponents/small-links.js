import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={};
class SmallLinks extends Component{
    render(){
        return(
            <Grid container style={{height:"8em",backgroundColor:"#ffffff"}}>
                <Grid item xs={12}>
                    <Typography type="caption" style={{lineHeight:1.6}}>
                        © 2017 Twitter About Help Center Terms Privacy policy Cookies Ads info Brand Blog Status Apps Jobs Marketing Businesses Developers
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SmallLinks)