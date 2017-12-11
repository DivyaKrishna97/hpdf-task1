import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TweetInput from './SubComponents/tweet-input'
import Feed from './SubComponents/feed'
const styles ={};
class CenterPane extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item>
                    <Feed query={this.props.searchQuery}/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CenterPane)