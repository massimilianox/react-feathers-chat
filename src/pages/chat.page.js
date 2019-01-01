import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Grid, Button, Segment } from 'semantic-ui-react'

import { getUsers, getMessages, postMessage } from '../actions/chat.actions'
import { login, logout } from '../actions/login.actions'

import ChatUserlistComponent from '../components/chat-userlist.component'
import ChatMessagesComponent from '../components/chat-messages.component'
 
class ChatPage extends Component {

  componentWillMount() {
    this.props.getUsers()
    this.props.getMessages()
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
        { console.log('render:', '\nusers: ', this.props.users, '\nmessages: ', this.props.messages) }

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

// export default ChatPage;

/**
 * Map state to props and inject actions
 */
export default connect( state => {
  return {
    loading: state.chat.loading,
    users: state.chat.users,
    messages: state.chat.messages,
    error: state.chat.error
  }
}, { getUsers, getMessages, postMessage, logout, login })(ChatPage)