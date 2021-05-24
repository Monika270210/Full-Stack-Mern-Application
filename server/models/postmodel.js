import mongoose from 'mongoose'

const postSchema=new mongoose.Schema({
    title:String,
    message:String
});

const PostMessage=mongoose.model("Post",postSchema);

export default PostMessage;