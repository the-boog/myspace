import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider'
import axios from 'axios';
import { Header, Container, Button, Card, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm'

class Posts extends React.Component {
  state = {profile: [], posts: [], showForm: false,}

  componentDidMount = () => {
    axios.get('/api/profiles')
    .then( res => {
      this.setState({profile: res.data}, () => this.setPosts())
    })
  }

  setPosts = () => {
    axios.get(`/api/profiles/${this.state.profile.id}/posts`)
    .then( res => {
      this.setState({posts: res.data})
    })
  }


  render () {
    const {posts, profile, showForm} = this.state
    return (
      <div >
        <PostForm profileId={profile.id} getPosts = {this.setPosts}/> 
            <Container>
            
              <Header>
                My Posts:
              </Header>
              {posts.map( p => {
                return (
                  <Card key={p.id}>
                    <Card.Header as="h4">
                      {p.title}  
                      <Divider />
                    </Card.Header>
                   
                    <Card.Description>
                      {p.body}
                    </Card.Description>
                    <Button size="mini" inverted color="red" >x</Button>
                  </Card>
                )
              })}
              
            </Container>
      </div>
    )
  }
}
  


const ConnectedPosts = (props) => (
  <AuthConsumer>
    {auth =>
      <Posts {...props} auth={auth}/>
      }
  </AuthConsumer>
)

export default ConnectedPosts;

