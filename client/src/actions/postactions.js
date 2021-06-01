import * as api from '../api/api';

export const getData=(page)=>async(dispatch)=>{
    try {
        const {data}=await api.fetchData(page);
        // console.log(data);
        const getDataobj={
            type:'FETCH_ALL_POSTS',
            payload:data,
        }
         dispatch(getDataobj);
    } catch (error) {
        console.log(error);
    }
}

export const getsearchData=(searchFields)=>async(dispatch)=>{
    try {
        // console.log(searchFields);
       const {data}=await api.fetchSearchData(searchFields);
       console.log(data);
       const getSearchDataObj={
           type:'FETCH_SEARCH_POST',
           payload:data
       }
       dispatch(getSearchDataObj);
    } catch (error) {
        console.log(error);
    }
}

export const postData=(Data)=>async(dispatch)=>{
    //  console.log("my new posted data ")
    //  console.log(Data);
    try {

         const {data}=await api.postData(Data);
        const postDataobj={
            type:'POST_NEW_DATA',
            payload:data,
        }
        dispatch(postDataobj);

    } catch (error) {
        console.log(error);
    }
}


export const deleteData=(Data)=>async(dispatch)=>{
    //   console.log(Data);
      try {
         await api.deleteData(Data._id);
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
      const {data}= await api.likePost(Data._id);
        const likePostobj={
            type:'LIKE_POST',
            payload:data,
        }
        dispatch(likePostobj);
    } catch (error) {
        console.log(error);
    }

}

export const updatePost=(Data)=>async(dispatch)=>{
    //   console.log(Data);
    try {
        const {data}=await api.updatePost(Data);
        const updatePostobj={
            type:'UPDATE_POST',
            payload:data
        }
        dispatch(updatePostobj);
    } catch (error) {
        console.log(error);
    }
}