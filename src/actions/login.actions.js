import FeathersIO from '../services/socketio.service'


/**
 * For signup, create a new user and then log them in
 * @param {object?} credential
 * @returns {async dispatch} SIGNUP
 */
export const signup = credential => {

  return async dispatch => {
    
    let message, authenticated

    try {

      // create the user if it does not exist
      await FeathersIO.service('users').create(credential)
      console.log('User created')

      // if successful log-in
      await FeathersIO.authenticate(Object.assign({ strategy: 'local' }, credential))
      message = 'User authenticated'
      authenticated = true
      
      console.log('Local strategy authenticated')

    } catch(err) {
      
      // If we got an error
      message = err
      authenticated = false

      console.log('Signup failled: ', err.message)

    }

    return dispatch({
      type: 'SIGNUP',
      message: message,
      authenticated: authenticated
    })
  }

}

/**
 * Log in either using the given email/password or the token from storage
 * @param {object?} credential
 * @returns {async dispatch} LOGIN
 */
export const login = credential => {

  return async dispatch => {

    let message, authenticated
    if (!credential) {
      try {

        // Try to authenticate using the JWT from localStorage
        await FeathersIO.authenticate()
        message = 'JWT authenticated'
        authenticated = true
        console.log('JWT authenticated')

      } catch(err) {

        // If we got an error
        message = null
        authenticated = false
        console.log('JWT authentication failled: ', err.message)

      }
    } else {
      try {

        // If we get login information, add the strategy we want to use for login
        await FeathersIO.authenticate(Object.assign({ strategy: 'local' }, credential))
        message = 'Local strategy authenticated'
        authenticated = true
        console.log('Local strategy authenticated')

      } catch(err) {

        // If we got an error
        message = err.message
        authenticated = false
        console.log('Local strategy authentication failled: ', err.message)

      }
    }

    return dispatch({
      type: 'LOGIN',
      message: message,
      authenticated: authenticated
    })
  }

}

/**
 * Log out
 * @returns { dispatch } LOGOUT
 */
export const logout = () => {

  return async dispatch => {
    let message, authenticated
    try {

      await FeathersIO.logout()
      message = 'Signed out'
      authenticated = false
      console.log('Signed out')

    } catch(err) {

      console.log('Logout failled: ', err.message)
      message = err.message
      authenticated = true
    }

    return dispatch({
      type: 'LOGOUT',
      message: message,
      authenticated: authenticated
    })
  }

}
