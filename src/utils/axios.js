import axios from 'axios';

import {getToken} from "../localStorage";

// const BASE_URL = "http://api.governmentjobstore.in/"
const BASE_URL = "http://127.0.0.1:8000/"
//const BASE_URL = "http://localhost:18181"
//const BASE_URL = "http://10.0.8.122:8000"
//const BASE_URL = "http://10.0.0.55:18181"
//const BASE_URL = "http://10.0.3.6:8000"
//const BASE_URL = "http://10.0.3.6:8000"
//const BASE_URL = "http://10.0.3.147:3000"
//const BASE_URL = "http://10.0.3.147:3000"
//const BASE_URL = process.env.BASE_URL


const wsmsAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Authorization': ''
    }
});

// Add a request interceptor
wsmsAxios.interceptors.request.use(function (config) {
    // console.log("This is the Request ", config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
wsmsAxios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

//Let's set it in the case of refresh

Object.assign(wsmsAxios.defaults, {headers: {authorization: `Bearer ${getToken()}`}});


export default wsmsAxios
