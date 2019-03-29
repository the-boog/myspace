import React from 'react';
import axios from 'axios';
import { Card, Container, Image, Button, Icon, Form } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider'


class Profile extends React.Component {
  state = {name: '', avatar: '', user_id: '', showForm: false, }

  componentDidMount = () => {
    axios.get('/api/profiles')
    .then( res => { 
      res.data &&
      this.setState({ name: res.data.name, avatar: res.data.avatar, user_id: res.data.user_id})
    })
    
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/profiles', {name: this.state.name, avatar: this.state.avatar, user_id: this.props.auth.user.id})
    .then( res => {
      this.props.history.push("/profile");
      this.setState({showForm: !this.state.showForm})
    })
    .catch( res=> {
      console.log(res)
    })
    
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  avatarForm = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name='avatar'
        defaultValue={this.state.avatar}
        onChange={this.handleChange}
        label="Avatar URL"
        />
      </Form>
     
    )
  }

  nameForm = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name='name'
        defaultValue={this.state.name}
        onChange={this.handleChange}
        label="Name"
        />
      </Form>
     
    )
  }

  avatarDisplay = () => {
    const { avatar } = this.state
    return (
      <div>
      {avatar ? <Image src={avatar}/> : "Avatar goes here"}
      </div>
    )
  }

  nameDisplay = () => {
    const { name } = this.state
    return (
      <div>
      {name ? name : "Name goes here"}
      </div>
    )
  }



  render () {
    const {name, showForm} = this.state
    return (
      <>
      <Container style ={{display: 'flex', justifyContent: 'center'}}>
        <Card style={{border: '2px solid black'}}>
          <Card.Content>
            
            <Card.Meta style={{display: 'flex', justifyContent: 'center'}}>
              {showForm ? this.avatarForm() : this.avatarDisplay() }  
            </Card.Meta>
            <br />
            <Card.Header style={{textAlign: 'center'}}>
              {showForm ? this.nameForm() : this.nameDisplay()}
            </Card.Header>
          </Card.Content>
          <Card.Content style={{textAlign: 'center'}}>
            <Button>
              <Icon name="hand spock" />
              My Posts
            </Button>
            <Button onClick={() => this.toggleForm()}>
              Edit Profile
            </Button>
          </Card.Content>
        </Card>
      </Container>  
      </>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    {auth =>
      <Profile {...props} auth={auth}/>
      }
  </AuthConsumer>
)

export default ConnectedProfile;
