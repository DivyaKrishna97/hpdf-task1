import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
const styles ={
    followButton:{
        color: "#1da1f2",
        padding: 0,
        minHeight: "32px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px"
    }
};
class FollowSuggestions extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="title">
                                Who to follow
                            </Typography>
                        </Grid>
                        <Grid item style={{display:"flex",alignItems:"flex-end",paddingLeft:0}}>
                            <Typography type="caption">
                                <a>. Refresh </a>. <a>View all</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                      <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                          <Grid container>
                              <Grid item>
                                  <Avatar>
                                      J
                                  </Avatar>
                              </Grid>
                              <Grid item>
                                  <Grid container direction="column">
                                      <Grid item style={{paddingBottom:0}}>
                                          <Grid container>
                                              <Grid item>
                                                  <Typography type="body2" className="followMe">
                                                      India TV
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                  <Typography type="caption">
                                                      @indiatvnews
                                                  </Typography>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                      <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                            <Grid container>
                                <Grid item>
                                    <Avatar>
                                        J
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography type="body2" className="followMe">
                                                        India TV
                                                    </Typography>
                                                </Grid>
                                                <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                    <Typography type="caption">
                                                        @indiatvnews
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                            <Button color="primary" className={classes.followButton}>
                                                Follow
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                            <Grid container>
                                <Grid item>
                                    <Avatar>
                                        J
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography type="body2" className="followMe">
                                                        India TV
                                                    </Typography>
                                                </Grid>
                                                <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                    <Typography type="caption">
                                                        @indiatvnews
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                            <Button color="primary" className={classes.followButton}>
                                                Follow
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(FollowSuggestions)