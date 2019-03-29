import React from 'react';
import {Form, Modal, Button, Icon} from 'semantic-ui-react';
import {AuthConsumer} from '../providers/AuthProvider'

class Register extends React.Component {
  state = {email: '', password: '', name: '', passwordConfirmation: '', modalOpen: true}

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, name } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, name }, history);
    else
      alert('Passwords Do Not Match!')
  }

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})

}

  handleSave = () => {
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
  }



  render () {
    const {email, password, modalOpen, passwordConfirmation,} = this.state
    return (
      
     
        <Modal open = {modalOpen}>
        <Modal.Header >
          Register New User
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
              <Form.Input 
            name="passwordConfirmation"
            value={passwordConfirmation}
            label="Confirm Password"
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
 
export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
