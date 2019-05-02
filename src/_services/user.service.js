import config from 'config';
import { authHeader } from '../_helpers';
import Axios from 'axios';

export const userService = {
    login,
    logout,
    getAll,
    register
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    // return Axios.post(`${config.apiUrl}/auth/login`).then(handleResponse)
    // .then((user) => {
    //     localStorage.setItem('user', JSON.stringify(user));
    //     return user
    // }).catch((err) => {
    //     console.log(err)
    // });

    return fetch(`${config.apiUrl}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
    
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(name, username, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, password })
    };

    return Axios.post(`${config.apiUrl}/auth/register`).then(handleResponse)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err)
    });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}