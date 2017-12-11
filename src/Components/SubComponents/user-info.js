import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import 'font-awesome/css/font-awesome.min.css'
const styles ={
    header:{
    }
};

class UserInfo extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column" className={classes.header}>
                <Grid item style={{backgroundColor:"#1da1f2",height:"6em"}}>
                    <Button fab color="primary" style={{marginTop:"4em","border": "3px solid",boxShadow:"none",width:"70px",height:"70px",backgroundColor:"rgb(29, 161, 242)"}}>
                        <i className="fa fa-2x fa-camera" aria-hidden="true">
                        </i>
                    </Button>
                </Grid>
                <Grid item style={{backgroundColor:"#ffffff"}}>
                    <Grid container>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography type="title">
                                        Junaid Arham
                                    </Typography>
                                </Grid>
                                <Grid item style={{padding:0,paddingLeft:"8px"}}>
                                    <Typography type="caption" style={{color:"#657786"}}>
                                        @jarhamzaki
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container justify="center">
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{fontWeight:600}}>
                                                Tweets
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" style={{fontWeight:600}}>
                                                200k
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{fontWeight:600}}>
                                                Following
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" style={{fontWeight:600}}>
                                                200k
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item style={{paddingBottom:0}}>
                                            <Typography type="body2" style={{fontWeight:600}}>
                                                Followers
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{paddingTop:0}}>
                                            <Typography type="body1" style={{fontWeight:600}}>
                                                200k
                                            </Typography>
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
export default withStyles(styles)(UserInfo)