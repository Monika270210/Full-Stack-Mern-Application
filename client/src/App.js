import React from 'react'
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/navbar';
import Homepage from './Pages/Homepage';
import Authpage from './Pages/Auth/Authpage';
import {BrowserRouter,Switch,Route}    from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
         <Container maxWidth="lg">
            <Navbar />
            <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Auth' component={Authpage} />
            </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
