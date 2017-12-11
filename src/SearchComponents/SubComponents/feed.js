import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import dummy from '../../assets/img/dume.png'
import 'font-awesome/css/font-awesome.min.css'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
const styles ={};
class Feed extends Component{
    render(){
        return(
            <Grid container direction="column" style={{backgroundColor:"#ffffff"}}>
                <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar>
                                J
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography type="body2" className="feedAuthor">
                                                {this.props.query}
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption">
                                                @indiatvnews &nbsp;.5m
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
                                        News About <b>Junaid</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={dummy} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Reply">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Retweet">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Like">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Direct Message">
                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar>
                                J
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography type="body2" className="feedAuthor">
                                                {this.props.query}
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption">
                                                @indiatvnews &nbsp;.5m
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
                                        News About <b>Junaid</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={dummy} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Reply">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Retweet">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Like">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Direct Message">
                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar>
                                J
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography type="body2" className="feedAuthor">
                                                {this.props.query}
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <Typography type="caption">
                                                @indiatvnews &nbsp;.5m
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
                                        News About <b>Junaid</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={dummy} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Reply">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Retweet">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Like">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Direct Message">
                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">
                                                        &nbsp;&nbsp;11
                                                    </span>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Feed)