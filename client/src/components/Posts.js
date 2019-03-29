import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider'
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  state = {posts: []}

  componentDidMount = () => {
    axios.get('/api/posts')
    .then( res => {
      this.setState({posts: res.data})
    })
  }

  render () {
    const {posts} = this.state
    return (
      <div >
        {posts.map ( p => {
          return (
            <div key={p.id}>
              <Header as={Link} to ={`/posts/${p.id}`}>
                {p.title}
              </Header>
            </div>
          )
        }
        
        )
        }
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

