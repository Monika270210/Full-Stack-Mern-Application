import React, { useEffect } from 'react'
import Form from './components/Form/form';
import Posts from './components/Posts/posts';
import { useDispatch } from 'react-redux'
import { getData } from './actions/postactions';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';


const App = () => {
    const dispatch = useDispatch();
    //  console.log(getData());
    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                    {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
            {/* This is the app component
            <Form />
            <Posts /> */}
        </div>
    )
}

export default App;
