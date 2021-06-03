import React from 'react'
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/navbar';
import Homepage from './Pages/Home/Homepage';
import Authpage from './Pages/Auth/Authpage';
import {BrowserRouter,Switch,Route, Redirect}    from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Myposts from './components/Myposts/Myposts';

const App = () => {
    const User=JSON.parse(window.localStorage.getItem('user'));
    return (
        <BrowserRouter> 
         <Container maxWidth="xl">
            <Navbar />
            <Switch>
            <Route exact path='/' render={()=><Redirect to='/posts' />} />
            <Route exact path='/posts'  component={Homepage} />
            <Route exact path='/posts/search' component={Homepage} />
            <Route exact path='/posts/myposts/:id' component={Myposts} />
            <Route exact path='/posts/:id' component={PostDetails} />
            <Route exact path='/Auth' component={()=>(User ? <Redirect to='/posts' />:<Authpage/>)} />
            </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
