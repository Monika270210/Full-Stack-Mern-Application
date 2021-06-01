import axios from 'axios';

// const url="http://localhost:5000/posts";
const API=axios.create({baseURL:"http://localhost:5000"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user'))
    {
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
})



export const fetchData=()=>API.get(`/posts`);

export const fetchSearchData=(searchFileds)=>API.get(`/posts/search?title=${searchFileds.title || 'none'}&tag=${searchFileds.tag}`);

export const postData=(newPost)=>API.post(`/posts`,newPost);

export const deleteData=(id)=>API.delete(`/posts`,{data:{delete_id:id}});

export const likePost=(id)=>API.patch(`/posts`,{user_id:id});

export const updatePost=(Data)=>API.put(`/posts`,{updatedPost:Data});

// const newurl="http://localhost:5000/users";

export const signIn=(UserDetails)=>API.post(`/users/signin`,UserDetails);

export const signUp=(UserDetails)=>API.post(`/users/signup`,UserDetails);