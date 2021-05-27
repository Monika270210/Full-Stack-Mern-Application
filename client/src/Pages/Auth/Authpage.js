import React,{useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { LockRounded } from '@material-ui/icons'
import useStyles from './styles';

const Authpage = () => {
    const classes = useStyles();
    const [signUp,setMode]=useState(false);

    const toggleMode=()=>{
        setMode((prevsignUp)=>!prevsignUp);
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockRounded />
                </Avatar>
                <Typography component="h1" variant="h5">Sign Up</Typography>
                <form className={classes.form} >
                    <Grid container spacing={2}>
                        {
                            signUp ?
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <TextField variant={'outlined'} required label="First Name" name="firstname" type="text" autoFocus={true}  ></TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField variant={'outlined'} required label="Last Name" name="lastname" type="text" ></TextField>
                                    </Grid>
                                </> : null
                        }
                        <Grid item xs={12} sm={12}>
                            <TextField variant={'outlined'} required fullWidth label="Email" name="email" type="email"></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField variant={'outlined'} required fullWidth label="Password" name="password" type="password"></TextField>
                        </Grid>
                        {
                            signUp ?
                                <Grid item xs={12} sm={12}>
                                    <TextField variant={'outlined'} required fullWidth label="Confirm password" name="confirmpassword" type="password"></TextField>
                                </Grid>
                                : null
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{!signUp ? "Log in":"Sign Up"}</Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={toggleMode}>
                                {signUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Authpage
