import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import LoginPage from './pages/login.page'
import ChatPage from './pages/chat.page'

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/chat" component={ ChatPage } />
      </Container>
    );
  }
}

export default App;