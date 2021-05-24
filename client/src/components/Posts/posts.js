import React from 'react'
import Post from './Post/post';
import {useSelector} from 'react-redux'

const Posts=()=> {
    const allposts=useSelector(state =>state.postReducer);
    console.log(allposts.data);
    return (
        <div>
            Posts
            <Post />
        </div>
    )
}

export default Posts
