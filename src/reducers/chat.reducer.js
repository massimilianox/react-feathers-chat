const defaultState = {
  loading: false,
  messages: null,
  users: null,
  error: null
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'POST_MESSAGE': {
      return {
        ...state,
      }
    }
    case 'NEW_MESSAGE': {
      return {
        ...state,
        messages: [ ...state.messages, action.message ]
      }
    }
    case 'NEW_USER': {
      return {
        ...state,
        users: [ ...state.users, action.user ]
      }
    }
    case 'LOAD_MESSAGES': {
      return {
        ...state,
        messages: action.messages,
        error: action.error
      }
    }
    case 'LOAD_USERS': {
      return {
        ...state,
        users: action.users,
        error: action.error
      }
    }
    default:
      return state
  }
}