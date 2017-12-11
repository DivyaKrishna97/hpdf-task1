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
    navSearch:{
        display: "block",
        outline: 0,
        width: "100%",
        height: "65%",
        backgroundColor: "#efefef",
        border: "none",
        borderRadius: "40px",
        fontSize: "0.8em",
        color: "#4d5259",
        fontWeight: 600,
        paddingLeft: "10px",
        transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    }
};
const primary = blue[500]; // #F44336
class NavBar extends Component{
    state = {
        value: 0,
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
                        <Grid item xs={2} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <input type="text" className={classes.navSearch} placeholder="Search" spellCheck="false" autoComplete="false" contentEditable="false"/>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Avatar>
                                J
                            </Avatar>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button raised color="primary" className={classes.button}>
                                Primary
                            </Button>
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar)