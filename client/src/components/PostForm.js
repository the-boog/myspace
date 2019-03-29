import React from 'react';
import { Form , Button} from 'semantic-ui-react';
import axios from 'axios';


class PostForm extends React.Component {
  state = {title: '', body: '', showForm: false}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()  
    axios.post(`/api/profiles/${this.props.profileId}/posts`, {title: this.state.title, body: this.state.body, profile_id: this.props.profileId})
    .then( res => {
     this.setState({title: '', body: ''}) 
     this.props.getPosts()
    })
    
  }
  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  formFunc = () => {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
            <Form.Input
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            label="Post Title"
            />
      </Form>
      <Form onSubmit={this.handleSubmit}>
            <Form.Input
            name='body'
            value={this.state.body}
            onChange={this.handleChange}
            label="Body"
            />
      </Form>
    </div>
    )
  }
  render () {
    return (
      <div>
        <Button onClick ={() => this.toggleForm()}>New Post</Button>
        <div>
          {this.state.showForm ? this.formFunc() : '' }
        </div>
      </div>
    )
  }
}

export default PostForm;

