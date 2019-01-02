import React from 'react';
import { List, Form, Button, Input } from 'semantic-ui-react'

function ChatMessagesComponent({ messages, postMessage }) {

  const addMessage = message => {
    return (
      <List.Item key={ message._id }>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Description as='a'>{ message.user.email }</List.Description>
          <List.Header as='a'>{ message.text }</List.Header>
          <List.Description as='a'>{ message.updatedAt }</List.Description>
        </List.Content>
      </List.Item>
    )
  }

  const messagesList = () => {
    if (Array.isArray(messages)) {
      return messages.map(message => {
        return addMessage(message)
      })
    }
  }

  return (
    <div>
    <List divided relaxed>
      { messagesList() }
    </List>
    <Form>
      <Input id='messageTxt' type='text' placeholder='write your text here' />
      <Button floated='right' id='login' color="olive" icon='arrow alternate circle right' onClick={ postMessage } />
    </Form>
    </div>
  )
}

export default ChatMessagesComponent