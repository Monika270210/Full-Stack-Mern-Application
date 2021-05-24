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