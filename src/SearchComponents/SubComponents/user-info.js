import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import 'font-awesome/css/font-awesome.min.css'
const styles ={
};

class UserInfo extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <div>
            <Grid container>
                <Grid item xs={12} style={{backgroundColor:"#ffffff",height:"4em",display:"flex",alignItems:"center"}}>
                    <Typography type="title">
                        Search Filters
                    </Typography>
                </Grid>
            </Grid>
                <Grid container style={{marginTop:"1em"}}>
                    <Grid xs={12} item style={{backgroundColor:"#ffffff",height:"4em",display:"flex",alignItems:"center"}}>
                        <Typography type="title">
                            Related Searches
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(UserInfo)