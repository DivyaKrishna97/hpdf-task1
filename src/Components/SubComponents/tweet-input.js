import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
const styles ={
    navSearch:{
        display: "block",
        outline: 0,
        width: "100%",
        height: "65%",
        backgroundColor: "#efefef",
        border: "none",
        borderRadius: "5px",
        fontSize: "0.8em",
        color: "#4d5259",
        fontWeight: 600,
        paddingLeft: "10px",
        transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    }
};
class TweetInput extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column">
                <Grid item>
                    <Grid container style={{backgroundColor:"#dae0e4"}}>
                        <Grid item xs={1}>
                            <Avatar>
                                J
                            </Avatar>
                        </Grid>
                        <Grid item xs={11} style={{display:"flex",alignItems:"center"}}>
                            <input type="placeholder" className={classes.navSearch} placeholder="What's Happening" spellCheck="false" autoComplete="false" contentEditable="false"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{display:"flex",justifyContent:"center"}}>
                    <Typography>
                        See 13 New Tweets
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(TweetInput)