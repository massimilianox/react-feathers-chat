import FeathersIO from '../services/socketio.service'

/**
 * Get users list
 * @returns { async dispatch }
 */
export const getUsers = () => {

  return async dispatch => {

    let users, error
    try {

      users = await FeathersIO.service('users').find()
      console.log('users fetched')

    } catch(err) {

      console.log('error fetching users: ', err.message)
      error = err.message
    }

    return dispatch({
      type: 'LOAD_USERS',
      users: users ? users.data : [],
      error: error
    })
  }

}

/**
 * Get messages list
 * @returns { async dispatch }
 */
export const getMessages = () => {

  return async dispatch => {

    let messages, error
    try {

      messages = await FeathersIO.service('messages').find()
      console.log('messages fetched')

    } catch(err) {

      console.log('error fetching messages: ', err.message)
      error = err.message
    }

    return dispatch({
      type: 'LOAD_MESSAGES',
      messages: messages ? messages.data : [],
      error: error
    })
  }

}

/**
 * Post a new message
 * @param { String } message
 * @returns { async dispatch } 
 */
export const postMessage = message => {

  return async dispatch => {

    let error
    try {

      // Create a new message
      await FeathersIO.service('messages').create({
        text: message
      })
      console.log('Message created')

    } catch(err) {

      console.log('error creating message: ', err.message)
      error = err.message
    }

    return dispatch({
      type: 'POST_MESSAGE',
      error: error
    })
  }

}

/**
 * On new messages are created
 * @param { Object } message
 * @returns { dispatch }
 */
export const newMessage = message => {
  console.log('new message arrived')
  return dispatch => {
    return dispatch({
      type: 'NEW_MESSAGE',
      message: message
    })
  }
}

/**
 * On new users are created
 * @param { Object } user
 * @returns { dispatch }
 */
export const newUser = user => {
  console.log('new user created')
  return dispatch => {
    return dispatch({
      type: 'NEW_USER',
      user: user
    })
  }
}