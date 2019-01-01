const defaultState = {
  loading: false,
  message: null,
  redirect: false,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'SINGUP':
    case 'LOGIN': {
      return {
        ...state,
        message: action.message,
        redirect: action.redirect
      }
    }
    default:
      return state
  }
}