import { combineReducers } from 'redux';
import User from './userGlobal';
import Cart from './cartCount';
import Auth from './auth'

export default combineReducers({
    user : User,
    cart : Cart,
    auth : Auth
})