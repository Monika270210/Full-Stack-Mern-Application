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
       res.send(newPost);
        // console.log("saving the new post !!");
    } catch (error) {
        // console.log("error in posting data ");
        console.log(error);
    }
}


export const deleteData=async(req,res)=>{
    const id=req.body.delete_id
    
    try {
       const deletedPost=await PostMessage.findByIdAndDelete(id);
       res.send(deletedPost);
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
        const updatedPost=await PostMessage.findByIdAndUpdate(id,{likes:post.likes+1},{new:true});
        res.send(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

export const updateData=async(req,res)=>{
   
    const updatedPost=req.body.updatedPost;
    // console.log(updatedPost);
    try {
         
      await PostMessage.findOneAndReplace({_id:updatedPost._id},updatedPost);
       res.send(updatedPost);
    //   console.log("replacement successfull !!!");


    } catch (error) {
        // console.log("error while updating the data !!");
        console.log(error);
    }
}