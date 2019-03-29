import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import Posts from './components/Posts'
import Post from './components/Post'
import Friends from './components/Friends'
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <>
      
        <Container>
          <Navbar />
          <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/profiles' component={Friends} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute exact path='/profile/:id/posts' component={Posts} />
            <ProtectedRoute exact path='/profile/:profile_id/posts/:id' component={Post} />
            
            <Route component={NoMatch} />
          </Switch>
          </FetchUser>
        </Container>
     
        
      </>
    );
  }
}

export default App;
