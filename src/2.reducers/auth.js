const INITIAL_STATE = {username : '', email : '', password : ''}

export default (state=INITIAL_STATE , action) => {
    if(action.type === 'LOGIN_SUCCESS'){
        var {username,email,password} = action.payload
        return {...INITIAL_STATE , username,email,password}
    }else if(action.type === 'LOGIN_SUCCESS_EMAIL'){
        return {...INITIAL_STATE , email: action.payload}
    }
    else{
        return state
    }
}