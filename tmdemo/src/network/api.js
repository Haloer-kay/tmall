import axios from 'axios';   

let host = 'http://127.0.0.1:9000/api';

export const login = params => { return axios.post(`${host}/user/login`, params)};

export const register = params => { return axios.post(`${host}/user/register`, params)};