import { combineReducers } from 'redux'

import LoginReducer from './login.reducer'
import ChatReducer from './chat.reducer'

// import { reducer as formReducer } from 'redux-form'

const reducers = {
    login: LoginReducer,
    chat: ChatReducer
    // form: formReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer