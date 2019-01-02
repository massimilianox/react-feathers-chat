const defaultState = {
  loading: false,
  message: null,
  authenticated: false
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'SIGNUP':
    case 'LOGIN': {
      return {
        ...state,
        message: action.message,
        authenticated: action.authenticated
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        message: action.message,
        authenticated: action.authenticated
      }
    }
    default:
      return state
  }
}