import React, { useState, useEffect } from 'react'
import Form from '.././components/Form/form';
import Posts from '.././components/Posts/posts';
import { Grid, Grow, Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getData } from '../actions/postactions';

const Homepage = () => {

    const [curr, setCurrent] = useState(undefined);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, [dispatch, curr]);



    return (

        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts curr={curr} setCurrent={setCurrent} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form curr={curr} setCurrent={setCurrent} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Homepage
