import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link, } from 'react-router-dom';
import { AuthConsumer} from '../providers/AuthProvider'


class Navbar extends React.Component {
  state = {hoverColorHome: false,
           hoverColorMyPosts: false,
           hoverColorFriends: false,
           hoverColorLogout: false,
           hoverColorLogin: false,
           hoverColorRegister: false,
           hoverColorProfile: false,
           
          }

  navDisplayLoggedInRight = () => {
    const { auth: {handleLogout}, history } = this.props;
    return (
        <Menu.Item onMouseOver={() => this.hoverColorOn(4)} onMouseLeave={() => this.hoverColorOn(0)} onClick={() => handleLogout(history)}>
          {this.state.hoverColorLogout ? this.blue('Logout') : 'Logout'}
        </Menu.Item>
    )
  }

  navDisplayLoggedOutRight = () => {
    return (
    <>
      <Link to="/login">
        <Menu.Item onMouseOver={() => this.hoverColorOn(5)} onMouseLeave={() => this.hoverColorOn(0)}>
        {this.state.hoverColorLogin ? this.blue('Login') : 'Login'}
        </Menu.Item>
      </Link>
      <Link to="/register">
        <Menu.Item onMouseOver={() => this.hoverColorOn(6)} onMouseLeave={() => this.hoverColorOn(0)}>
        {this.state.hoverColorRegister ? this.blue('Register') : 'Register'}
        </Menu.Item>
      </Link>
    </>
    )
  }

  navDisplayLoggedInLeft = () => {
    return (
      <>
      <Link to="/">
        <Menu.Item onMouseOver={() => this.hoverColorOn(1)} onMouseLeave={() => this.hoverColorOn(0)}>
          {this.state.hoverColorHome ? this.blue('Home') : 'Home'}        
        </Menu.Item>
      </Link>
      <Link to="/profile">
        <Menu.Item onMouseOver={() => this.hoverColorOn(7)} onMouseLeave={() => this.hoverColorOn(0)}>
          {this.state.hoverColorProfile ? this.blue('Profile') : 'Profile'}        
        </Menu.Item>
      </Link>
      <Link to='/profile/posts'>
        <Menu.Item onMouseOver={() => this.hoverColorOn(2)} onMouseLeave={() => this.hoverColorOn(0)}>
          {this.state.hoverColorMyPosts ? this.blue('My Posts') : 'My Posts'}
        </Menu.Item>
      </Link>
      <Link to="/profiles">
        <Menu.Item onMouseOver={() => this.hoverColorOn(3)} onMouseLeave={() => this.hoverColorOn(0)}>
          {this.state.hoverColorFriends ? this.blue('Friends') : 'Friends'}
        </Menu.Item>
      </Link>
      </>
    )
  }

  navDisplayLoggedOutLeft = () => {
    return (
    <>
    </>
    )
  }


  hoverColorOn = (number) => {
    switch(number) {
      case 0:
        this.setState({hoverColorHome: false,
                       hoverColorMyPosts: false,
                       hoverColorFriends: false,
                       hoverColorLogout: false,
                       hoverColorLogin: false,
                       hoverColorRegister: false,
                       hoverColorProfile: false,
                       })
      break;
      case 1:
        this.setState({hoverColorHome: true})
      break;
      case 2:
        this.setState({hoverColorMyPosts: true})
      break;
      case 3:
        this.setState({hoverColorFriends: true})
      break;
      case 4:
        this.setState({hoverColorLogout: true})
      break;
      case 5:
        this.setState({hoverColorLogin: true})
      break;
      case 6:
        this.setState({hoverColorRegister: true})
      break;
      case 7:
        this.setState({hoverColorProfile: true})
      break;
      // no default
    }
    
  }


  blue = (input) => {
    return (
      <div style={{color: 'blue'}}>{input}</div>
    )
  }



  render () {
    const { auth: { user} } = this.props;
    return(
      <>
    <Menu style={{backgroundColor: 'silver'}}>
        {user ? this.navDisplayLoggedInLeft() : this.navDisplayLoggedOutLeft()}
      <Menu.Menu position="right">
        {user ? this.navDisplayLoggedInRight() : this.navDisplayLoggedOutRight() }
      </Menu.Menu>

    </Menu>
  </>

    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    {auth =>
      <Navbar {...props} auth={auth}/>
      }
  </AuthConsumer>
)

export default ConnectedNavbar;
