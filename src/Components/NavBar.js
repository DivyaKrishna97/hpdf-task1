import React , {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
/*import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'*/
import 'font-awesome/css/font-awesome.min.css'
import Tabs, { Tab } from 'material-ui/Tabs';
import {blue} from 'material-ui/colors';
const styles={
    tweetButton:{
        backgroundColor: "#1da1f2",
        color:"#ffffff",
        padding: 0,
        minHeight: "38px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px"
    }
};
const primary = blue[500]; // #F44336
class NavBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            value: 0,
        };
        this.handleChange = this.handleChange.bind(this)
        this.searchIt = this.searchIt.bind(this);
    }
    searchIt = (event)=>{
        let code = event.keyCode || event.which;
        if(code===13){
            console.log("Searching")
        }
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render(){
        const classes = this.props.classes;
        return(
            <div>
                <AppBar position="static" style={{backgroundColor:"#ffffff"}}>
                    <Grid container direction="row" spacing={0}>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item>
                            <Tabs value={this.state.value} style={{color:primary}} indicatorColor={primary} fullWidth={false} onChange={this.handleChange}>
                                <Tab label="Home" style={{minWidth:0}}/>
                                <Tab label="Notifications" style={{minWidth:0}}/>
                                <Tab label="Messages" style={{minWidth:0}}/>
                            </Tabs>
                        </Grid>
                        <Grid item xs={4} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px"}}>
                            </i>
                        </Grid>
                        <Grid item xs={2} className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <input type="text" className="navSearch" placeholder="Search Twitter" spellCheck="false" autoComplete="false" contentEditable="false" onKeyPress={this.searchIt}/>
                            <span className="fa fa-search" aria-hidden="true">
                            </span>
                        </Grid>
                        <Grid item  xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Avatar>
                                J
                            </Avatar>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button  color="primary" className={classes.tweetButton}>
                                Tweet
                            </Button>
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar)