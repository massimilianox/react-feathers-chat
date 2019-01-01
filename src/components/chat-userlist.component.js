import React from 'react'
import { List, Button } from 'semantic-ui-react'

function ChatUserlistComponent({ users, logout }) {

  const usersList = () => {
    if (Array.isArray(users)) {
      return users.map(user => {
        return(
          <List.Item key={ user._id }>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>{ user.email }</List.Header>
            </List.Content>
          </List.Item>
        )
      })
    }
  }

  return (
    <div>
      <List divided relaxed>
        { usersList() }
      </List>
      <Button primary basic onClick={ logout } >Log out</Button>
    </div>
  )
}

export default ChatUserlistComponent