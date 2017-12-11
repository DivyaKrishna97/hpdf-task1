import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={};

class Trends extends Component{
    render(){
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="title">
                                Trends Grid
                            </Typography>
                        </Grid>
                        <Grid item style={{display:"flex",alignItems:"flex-end",paddingLeft:0}}>
                            <Typography type="caption">
                                Change
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}}>
                                #MondayMotivation
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                @yrf, @ranveerbrar and 1 more are Tweeting about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}}>
                                #MondayMotivation
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                @yrf, @ranveerbrar and 1 more are Tweeting about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}}>
                                #MondayMotivation
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                @yrf, @ranveerbrar and 1 more are Tweeting about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}}>
                                #MondayMotivation
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                @yrf, @ranveerbrar and 1 more are Tweeting about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}}>
                                #MondayMotivation
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                @yrf, @ranveerbrar and 1 more are Tweeting about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}}>
                                #MondayMotivation
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                @yrf, @ranveerbrar and 1 more are Tweeting about this
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Trends)