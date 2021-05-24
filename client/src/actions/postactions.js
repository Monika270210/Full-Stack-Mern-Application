import * as api from '../api/api';

export const getData=()=>async(dispatch)=>{
    try {
        const allposts=await api.fetchData();
        // console.log(allposts);   
        const getDataobj={
            type:'FETCH_ALL_POSTS',
            payload:allposts,
        }
         dispatch(getDataobj);
    } catch (error) {
        console.log(error);
    }
}