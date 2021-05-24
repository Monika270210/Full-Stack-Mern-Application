import mongoose from 'mongoose'

const postSchema=new mongoose.Schema({
    creator:String,
    title:String,
    message:String,
    selectedFile:String,
    tags:[String],
    time:{
        type:Date,
        default:new Date(),
    },
    likes:{
        type:Number,
        default:0,
    }
});

const PostMessage=mongoose.model("Post",postSchema);

export default PostMessage;