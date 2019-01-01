import FeathersIO from '../services/socketio.service'

export const getUsers = () => {

  return async dispatch => {
    let users, error
    try {
      users = await FeathersIO.service('users').find()
      console.log('users fetched')
    } catch(err) {
      error = err.message
    }

    return dispatch({
      type: 'LOAD_USERS',
      users: users ? users.data : [],
      error: error
    })
  }

}

export const getMessages = () => {

  return async dispatch => {
    let messages, error
    try {
      messages = await FeathersIO.service('messages').find()
      console.log('messages fetched')
    } catch(err) {
      error = err.message
    }

    return dispatch({
      type: 'LOAD_MESSAGES',
      messages: messages ? messages.data : [],
      error: error
    })
  }

}

export const postMessage = message => {
  console.log('action postMessage')
 
  return async dispatch => {

    let error

    try {

      // Create a new message
      await FeathersIO.service('messages').create({
        text: message
      })
      console.log('Message created')
    } catch(err) {
      console.log('error: ', err.message)
      error = err.message
    }

    return dispatch({
      type: 'POST_MESSAGE',
      error: error
    })
  }

}