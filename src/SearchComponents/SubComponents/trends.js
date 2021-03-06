import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
const styles ={

};

class Trends extends Component{
    render(){
        const classes = this.props.classes;
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
                            <Typography type="caption" style={{color:"#1da1f2"}}>
                                <a href="#">Change</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
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
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
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
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
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
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
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