import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import  loginReducer  from '../reducers/login'



export default combineReducers({ // To collect all the reducers
  users: userReducer,
  login: loginReducer
})