import React from 'react';
import axios from 'axios';
import { Card, Container, Image, Button, Icon, Form } from 'semantic-ui-react';
import doghair from './doghair.jpeg'

class Profile extends React.Component {
  state = {name: '', avatar: '', toggleForm: false }

  componentDidMount = () => {
    axios.get('/api/profiles')
    .then( res => {
      this.setState({ name: res.data.name, avatar: res.data.avatar})
    })
    .catch( res => {
      console.log(res)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/api/departments/${this.props.match.params.id}`, {name: this.state.name})
    .then( res => {
      this.props.history.push("/");
    })
    
  }

  handleChange = (e) => {

  }

  avatarFunc = () => {
    return (
      this.state.toggleForm ? <Form onSubmit={this.handleSubmit}>
      <Form.Input
      name={this.state.avatar}
      defaultValue={this.state.avatar}
      onChange={this.handleChange}
      label="Avatar"
      />
      
    </Form>
      
          : 
      "Avatar Goes Here"
    )
  }



  render () {
    const {name, avatar} = this.state
    return (
      <>
      <Container style ={{display: 'flex', justifyContent: 'center'}}>
        <Card style={{border: '2px solid black'}}>
          <Card.Content>
            
            <Card.Meta style={{display: 'flex', justifyContent: 'center'}}>
              {avatar ? avatar : 'Avatar Goes Here'}  
            </Card.Meta>
            <br />
            <Card.Header style={{textAlign: 'center'}}>
              {name ? name : '"Name goes Here"'}
            </Card.Header>
          </Card.Content>
          <Card.Content style={{textAlign: 'center'}}>
            <Button>
              <Icon name="hand spock" />
              My Posts
            </Button>
            <Button>
              Edit Profile
            </Button>
          </Card.Content>
        </Card>
      </Container>  
      </>
    )
  }
}

export default Profile;

