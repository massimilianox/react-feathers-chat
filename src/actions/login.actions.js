import FeathersIO from '../services/socketio.service'


/**
 * For signup, create a new user and then log them in
 * @param {object?} credential
 * @returns {async dispatch} SINGUP
 */
export const singup = credential => {

  let message

  return async dispatch => {
    try {

      // first create the user if it does not exist
      await FeathersIO.service('users').create(credential)

      // if successful log-in
      await FeathersIO.authenticate(credential)
      message = 'You\'re authenticated'

    } catch(err) {

      // If we got an error
      message = err
    }

    return dispatch({
      type: 'SINGUP',
      message: message
    })
  }

}

/**
 * Log in either using the given email/password or the token from storage
 * @param {object?} credential
 * @returns {async dispatch}
 */
export const login = credential => {

  let message, redirect

  return async dispatch => {
    if (!credential) {
      try {

        // Try to authenticate using the JWT from localStorage
        await FeathersIO.authenticate()
        message = 'You\'re authenticated'
        redirect = true

      } catch(err) {

        // If we got an error
        message = err.message
      }
    } else {
      try {

        // If we get login information, add the strategy we want to use for login
        await FeathersIO.authenticate(Object.assign({ strategy: 'local' }, credential))
        message = 'You\'are authenticated'
        redirect = true

      } catch(err) {

        // If we got an error
        message = err.message
      }
    }

    return dispatch({
      type: 'LOGIN',
      message: message,
      redirect: redirect
    })
  }

}

export const logout = () => {
  return async dispatch => {
    let message

    try {

      await FeathersIO.logout()
      message = 'You\'re sing out'

    } catch(err) {
      message = err.message
    }
    return dispatch({
      type: 'LOGOUT',
      message: message
    })
  }
}
