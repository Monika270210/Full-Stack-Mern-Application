import * as api from '../api/api';

export const getData=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchData();  
        const getDataobj={
            type:'FETCH_ALL_POSTS',
            payload:data,
        }
         dispatch(getDataobj);
    } catch (error) {
        console.log(error);
    }
}

export const postData=(Data)=>async(dispatch)=>{
    //  console.log("my new posted data ")
    //  console.log(Data);
    try {
          await api.postData(Data);
        const postDataobj={
            type:'POST_NEW_DATA',
            payload:Data,
        }
        dispatch(postDataobj);

    } catch (error) {
        console.log(error);
    }
}


export const deleteData=(Data)=>async(dispatch)=>{
    //   console.log(Data);
      try {
          await api.deleteData(Data);
          const deleteDataobj={
              type:'DELETE_POST',
              payload:Data,
          }
          dispatch(deleteDataobj);
      } catch (error) {
          console.log(error);
      }
}

export const likePost=(Data)=>async(dispatch)=>{

    try {
        await api.likePost(Data);
        const likePostobj={
            type:'LIKE_POST',
            payload:Data,
        }
        dispatch(likePostobj);
    } catch (error) {
        console.log(error);
    }

}

export const updatePost=(Data)=>async(dispatch)=>{
      
    try {
        await api.updatePost(Data);
        const updatePostobj={
            type:'UPDATE_POST',
            payload:Data
        }
        dispatch(updatePostobj);
    } catch (error) {
        console.log(error);
    }
}