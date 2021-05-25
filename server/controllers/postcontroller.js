import PostMessage from '../models/postmodel.js';

export const getData=async(req,res)=>{
    try {
        const allposts=await PostMessage.find();
        res.send(allposts);
    } catch (error) {
        // console.log("error in getting data ")
        console.log(error); 
    }
}

export const postData=async(req,res)=>{
    const newpost=req.body;
    const newPost= new PostMessage(newpost);
    try {
       await newPost.save();
        // console.log("saving the new post !!");
    } catch (error) {
        // console.log("error in posting data ");
        console.log(error);
    }
}


export const deleteData=async(req,res)=>{
    const id=req.body.delete_id
    
    try {
        await PostMessage.findByIdAndDelete(id);
        // console.log("deleting the post !!");  
    } catch (error) {
        // console.log("error while deleting !!");
        console.log(error);
    }
}

export const likeData=async(req,res)=>{
    const id=req.body.user_id;
    // console.log(id);
    try {
        const post=await PostMessage.findById(id)
        await PostMessage.findByIdAndUpdate(id,{likes:post.likes+1},{new:true});
    } catch (error) {
        console.log(error);
    }
}