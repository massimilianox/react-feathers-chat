import { combineReducers } from 'redux'

import LoginReducer from './login.reducer'
import ChatReducer from './chat.reducer'

const reducers = {
    login: LoginReducer,
    chat: ChatReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer