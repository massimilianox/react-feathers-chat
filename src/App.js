import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import LoginPage from './pages/login.page'
import ChatPage from './pages/chat.page'

import FeathersIO from './services/socketio.service'

import { getMessages, getUsers } from './actions/chat.actions'


class App extends Component {

  constructor(props) {
    super(props)
    FeathersIO.service('messages').on('created', getMessages)
    FeathersIO.service('users').on('created', getUsers)
  }

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
