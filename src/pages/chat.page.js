import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router'

import { getUsers, getMessages, postMessage, newMessage, newUser } from '../actions/chat.actions'
import { logout, login } from '../actions/login.actions'

import FeathersIO from '../services/socketio.service'

import ChatUserlistComponent from '../components/chat-userlist.component'
import ChatMessagesComponent from '../components/chat-messages.component'
 
class ChatPage extends Component {

  componentWillMount() {
    this.props.getUsers()
    this.props.getMessages()

    FeathersIO.service('messages').on('created', this.pushMessage)
    FeathersIO.service('users').on('created', this.pushUser)
  }
  
  componentWillUnmount() {
    FeathersIO.service('messages').removeListener('created', this.pushMessage)
    FeathersIO.service('users').removeListener('created', this.pushUser)
  }

  pushMessage = message => {
    this.props.newMessage(message)

  }
  
  pushUser = user => {
    this.props.newUser(user)
  }

  getMessage() {
    if (document.getElementById('messageTxt').value) {
      return document.getElementById('messageTxt').value
    } else {
      return null
    }
  }

  postMessage = () => {
    const message = this.getMessage()
    message && this.props.postMessage(message)
  }

  render() {
    return (
      <div>
       
        { !this.props.authenticated && <Redirect to='/' /> }

        <Grid celled relaxed='very' stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <ChatUserlistComponent
                users={ this.props.users }
                logout= { this.props.logout } />
            </Grid.Column>
            <Grid.Column width={13}>
              <ChatMessagesComponent
                messages={ this.props.messages }
                postMessage={ this.postMessage } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </div>
    )
  }
}

/**
 * Map state to props and inject actions
 */
export default connect( state => {
  return {
    loading: state.chat.loading,
    users: state.chat.users,
    messages: state.chat.messages,
    error: state.chat.error,
    authenticated: state.login.authenticated
  }
}, { getUsers, getMessages, postMessage, newMessage, newUser, logout, login })(ChatPage)