import React from 'react';
import {Form, Modal, Button, Icon} from 'semantic-ui-react';
import {AuthConsumer} from '../providers/AuthProvider'

class Login extends React.Component {
  state = {email: '', password: '', modalOpen: true}

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { auth: { handleLogin, }, history, } = this.props;
      handleLogin({ email, password }, history);
  }

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})

}

  handleSave = () => {
    const { email, password } = this.state;
    const { auth: { handleLogin, }, history, } = this.props;
      handleLogin({ email, password, }, history);
  }



  render () {
    const {email, password, modalOpen} = this.state
    return (
      
     
        <Modal open = {modalOpen}>
        <Modal.Header >
          Enter Your Login Info
        </Modal.Header>
          <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="email"
            label="E-mail"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            name="password"
            value={password}
            label="Password"
            required
            type="password"
            onChange={this.handleChange}
            />
            <Button color="green" size="mini" onClick={() => this.handleSave()} >
              <Icon name="user"/>
              Submit
            </Button>
            <Button color="yellow" size="mini" onClick={() => this.props.history.push('/')}>
              Cancel
            </Button>
            </Form>
          </Modal.Content>
          
        </Modal>      
    
        

    )
  }
}
 
export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
