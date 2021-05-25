import axios from 'axios';

const url="http://localhost:5000/posts";


export const fetchData=()=>axios.get(url);

export const postData=(newPost)=>axios.post(url,newPost);

export const deleteData=(id)=>axios.delete(url,{data:{delete_id:id}});

export const likePost=(id)=>axios.patch(url,{user_id:id});

export const updatePost=(Data)=>axios.put(url,{updatedPost:Data});