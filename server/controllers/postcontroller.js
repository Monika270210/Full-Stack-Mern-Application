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


export const deleteData=async(req,res)=>{
    const post=req.body;
    try {
        await PostMessage.findByIdAndDelete({_id:post._id});
        console.log("deleting the post !!");  
    } catch (error) {
        console.log("error while deleting !!");
        console.log(error);
    }
}