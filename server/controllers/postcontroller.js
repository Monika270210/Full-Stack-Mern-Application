import PostMessage from '../models/postmodel.js';

export const getData=async(req,res)=>{
    try {
        const allposts=await PostMessage.find();
        res.send(allposts);
    } catch (error) {
        console.log("error in getting data "+error); 
    }
}

export const postData=async(req,res)=>{
    const newpost=req.body;
    const newPost= new PostMessage(newpost);
    try {
       await newPost.save();
        console.log("saving the new post !!");
    } catch (error) {
        console.log("error in posting data "+error);
    }
}