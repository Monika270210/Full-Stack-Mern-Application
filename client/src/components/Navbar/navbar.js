import React, { useState, useEffect } from 'react'
import {Avatar,AppBar, Button, Typography, Toolbar } from '@material-ui/core';
import useStyles from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogOut } from '../../actions/authactions';

const Navbar = () => {
    // const isUser = false;
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const [isUser, setUser] = useState(JSON.parse(window.localStorage.getItem('user')));

    useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem('user')));
    }, [location]);

    // console.log(isUser);

    const handleSignin = () => {
        history.push('/Auth');
    }
    const handleLogout = () => {
        dispatch(LogOut());
        history.push('/');
        setUser(null);
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
                            <Avatar className={classes.purple} alt={isUser.profile.name} src={isUser.profile.imageUrl}>{isUser.profile.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{isUser.profile.name}</Typography>
                            <Button variant="contained" color="primary" onClick={handleLogout}>Log out</Button>
                        </div>
                    ) : <Button variant="contained" color="primary" onClick={handleSignin} >Sign In</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
