import React from 'react';
import { Header } from 'semantic-ui-react';


const Home = () => (
  <div style={{backgroundImage: 'url("https://media.giphy.com/media/26n6G8lRMOrYC6rFS/giphy.gif")', height: '760px'}}>
    <Header as="h1" style={{textAlign: 'center', color: 'white'} }>
      MySpace
    </Header>
    <br />
    <br />
    <br />
    <Header style={{textAlign: 'center', color: 'white'}}>
      Welcome to the Greatest Website on the internet
      <br />
      that will never, ever go out of fashion.
    </Header>
  </div>
)

export default Home;
