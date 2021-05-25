import React from 'react'
import Post from './Post/post';
import { Grid, CircularProgress } from '@material-ui/core';
import {useSelector} from 'react-redux'
import useStyles from './styles';

const Posts=({curr,setCurrent})=> {
    
    const allposts=useSelector(state =>state.postReducer);
    const classes = useStyles();
    console.log(allposts);
    
    return (
         
       !allposts.length ? <CircularProgress />:(

        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {allposts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} curr={curr} setCurrent={setCurrent} />
          </Grid>
        ))}
      </Grid>
       )

    )
}

export default Posts
