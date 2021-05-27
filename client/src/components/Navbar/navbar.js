import React from 'react'
import { AppBar, Button, Typography,Toolbar } from '@material-ui/core';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';

const Navbar = () => {
    const isUser = false;
    const classes = useStyles();
    const history=useHistory();

    const handleSignin=()=>{
      history.push('/Auth');
    }
    const handleLogout=()=>{
       history.push('/Auth');
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    isUser ? (
                        <div className={classes.profile}>
                             <Button variant="contained" color="primary" onClick={handleLogout}>Log out</Button>
                         </div>
                    ):<Button variant="contained" color="primary" onClick={handleSignin} >Sign In</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
