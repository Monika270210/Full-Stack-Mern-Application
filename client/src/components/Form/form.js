import React,{useState,useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import {useDispatch} from 'react-redux'
import {postData,updatePost} from '../../actions/postactions'
import FileBase  from 'react-file-base64'


const Form=({curr,setCurrent})=> {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [Data,updateData]=useState({
        creator:'',
        title:'',
        message:'',
        tags:[],
        selectedFile:''
    });

   useEffect(()=>{
     if(curr!==undefined)
     {
         updateData(curr);
     }
   },[curr])

    const handlesubmit=(e)=>{
       e.preventDefault();
       if(curr===undefined){
        dispatch(postData(Data));
       }
       else{
            dispatch(updatePost(Data));
       }
       handleclear();

    }

    const handleclear=async()=>{
        setCurrent(undefined);
        updateData({
            ...Data,
            creator:'',
            title:'',
            message:'',
            tags:[],
            selectedFile:''
        });
    }


    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handlesubmit} >
            <Typography variant="h6">Creating a post</Typography>
            <TextField name="creator" variant="outlined" fullWidth label="Creator"  value={Data.creator} onChange={(e)=> updateData({...Data,creator:e.target.value})} />
            <TextField name="title" variant="outlined" fullWidth label="Title"  value={Data.title} onChange={(e)=> updateData({...Data,title:e.target.value})} />
            <TextField name="message" variant="outlined" fullWidth label="Message" value={Data.message} onChange={(e)=> updateData({...Data,message:e.target.value})} />
            <TextField name="tags" variant="outlined" fullWidth label="Tags" value={Data.tags} onChange={(e)=> updateData({...Data,tags:e.target.value})} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => updateData({ ...Data, selectedFile: base64 })} /></div>
            <Button type="submit" size="large" color="primary" variant="contained" fullWidth className={classes.buttonSubmit} >Submit</Button>
            <Button size="small" color="secondary" variant="contained" fullWidth onClick={handleclear}>Clear</Button>
        </form>
    </Paper>
    )
}

export default Form
