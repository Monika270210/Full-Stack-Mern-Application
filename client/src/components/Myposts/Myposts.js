import React, { useEffect } from 'react'
import { Grid, Paper, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Post from '../Posts/Post/post';
import useStyles from './styles';
import { getCurrentUserPosts } from '../../actions/postactions';


const Myposts = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentuserPosts, loading } = useSelector(state => state.postReducer);
  // console.log(currentuserPosts);
  // console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentUserPosts());
    }
  }, [id, dispatch]);

  if (loading) {
    return (<Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper>)
  }


  return (

    <Grid className={classes.container} container alignItems="stretch" spacing={4}>
      {currentuserPosts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6} lg={4}>
          <Post post={post} myposts />
        </Grid>
      ))}
    </Grid>
  )
}

export default Myposts
