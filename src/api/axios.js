import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_CHATGPT_BACKEND_URL
});

export default instance;