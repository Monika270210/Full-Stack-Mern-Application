import React,{useEffect} from 'react'
import Form from './components/Form/form';
import Posts from './components/Posts/posts';
import {useDispatch} from 'react-redux'
import {getData} from './actions/postactions';


const App=()=> {
     const dispatch = useDispatch();
    //  console.log(getData());
     useEffect(() => {
         dispatch(getData());
     }, [dispatch])
    return (
        <div>
            This is the app component
            <Form />
            <Posts />
        </div>
    )
}

export default App;
