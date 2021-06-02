import React from 'react'
import Post from './Post/post';
import { Grid, CircularProgress,Paper } from '@material-ui/core';
import {useSelector} from 'react-redux'
import useStyles from './styles';

const Posts=({curr,setCurrent})=> {
    
    const allposts=useSelector(state =>state.postReducer.posts);
    const loading=useSelector(state=>state.postReducer.loading);
    const classes = useStyles();
    // console.log(allposts);

    if(loading)
    {
        return (<CircularProgress />);
    }

    if(!allposts.length)
    {
      return (
          <Paper>
             NO POSTS AVAILABLE
             <br/>
             BE THE FIRST ONE TO CREATE POST...
          </Paper>
      )
    }
    
    return (
         

        <Grid className={classes.container} container alignItems="stretch" spacing={4}>
        {allposts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6} lg={4}>
            <Post post={post} curr={curr} setCurrent={setCurrent} />
          </Grid>
        ))}
      </Grid>

    )
}

export default Posts
