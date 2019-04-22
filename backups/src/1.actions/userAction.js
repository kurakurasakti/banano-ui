import axios from 'axios'
import {urlApi} from './../support/urlApi'
import cookie from 'universal-cookie'

const objCookie = new cookie()
export const onLogin = (paramUsername,password) => { 
    return(dispatch)=>{
        // INI UNTUK MENGUBAH LOADING MENJADI TRUE
        dispatch({
            type: 'LOADING',
        })

        // GET DATA DARI API 
        axios.get(urlApi + '/users',{
            params:{email :paramUsername,
                    password}})
        
        // KALO BERHASIL NGE GET, DIA MASUK THEN
        .then((res) => {
            console.log(res)

        // IF USERNAME DAN PASSWORD SESUAI MAKA RES.DATA ADA ISINYA
            if(res.data.length > 0){
                dispatch(
                    {
                        type : 'LOGIN_SUCCESS',
                        payload : res.data[0]
                       
                    }
                )
            }else{
                dispatch({
                    type : 'USER_NOT_FOUND',
                })
            }
            
        })
        .catch((err) => {
            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
    }
   
}


export const keepLogin = (cookie) => {
    return(dispatch) => {
        axios.get(urlApi + '/auth/signin',{params : {email : cookie}})
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'LOGIN_SUCCESS',
                    payload : res.data[0]
                    // {
                    //     username : res.data[0].username,
                    //     role : res.data[0].role

                    // }
                })
            }
        })
        .catch((err) => console.log(err))
    }
} 


export const resetUser = () => {
    return {
        type : 'RESET_USER'
    }
}

export const addToChart = () => {
    return(dispatch)=>{
        
    }
}

export const userDetails = () => {
    return(dispatch)=>{
        
    }
}

export const userRegister = (a,b,c,d) => { // userRegister('fikri')
    return(dispatch)=>{
        dispatch({
            type : 'LOADING'
        })
        var newData = {username : a, password : b, email : c, phone : d}
        // Mengecek Username availablity

        axios.get(urlApi +'/users?username=' + a)
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'USERNAME_NOT_AVAILABLE'
                })
            }
            else{
                axios.post(urlApi +'/users',newData)
                .then((res) => dispatch({
                    type : 'LOGIN_SUCCESS',
                    //Mengirim Payload dalam bentuk Object
                    //payload : { username : newData.username, id : res.data.id, email : c} 
                    payload : a
                },
                    // Parameter Ketiga agar cookie bisa diakses di semua komponen
                    objCookie.set('userData',a,{path : '/'}),
                ))
                .catch((err) => console.log(err))
            }
        })
        .catch((err) => {
            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
    }
}
userRegister('Fikri','123','fikri@gmail.com','0812381234')




