import React,{useEffect} from 'react'
import {Paper,Typography,Divider} from '@material-ui/core'
import {useSelector} from 'react-redux';
import useStyles from './styles';
import  moment  from 'moment';
import {useHistory,useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { getParticularData, getsearchData } from '../../actions/postactions';


const PostDetails = () => {
    const classes=useStyles();
    const {particularpost,posts}=useSelector((state)=>state.postReducer);
    // console.log(particularpost);
    // console.log(posts);
    const {id}=useParams();
    const dispatch = useDispatch();
    const history=useHistory();

    useEffect(() => {
     if(id)
     dispatch(getParticularData(id));
    }, [id,dispatch]);

    useEffect(() => {
      if(particularpost)
      {
         dispatch(getsearchData({title:'none',tag:particularpost.tags}));
      }
    }, [particularpost,dispatch])


    if(!particularpost)
    return null;

    const recommendedPosts=posts.filter(post=>post._id!==particularpost._id);

    const openPost=(id)=>{
      history.push(`/posts/${id}`);
    }


    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">Title: {particularpost.title}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">Tag: {particularpost.tags}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography gutterBottom variant="body1" component="p">Description: {particularpost.message}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6">Created by: {particularpost.name}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1">{moment(particularpost.time).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={particularpost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={particularpost.title} />
        </div>
      </div>

       {/* recommended posts section  */}
       { recommendedPosts.length ? (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} key={_id} onClick={()=>openPost(_id)}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="hgqbwnmlkbjweqko2ljcne" width="200px" />
              </div>
            ))}
          </div>
        </div>
      ):null
    }


      </Paper>
    )
}

export default PostDetails;
