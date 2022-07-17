import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/data";

export const publicRequest = axios.create({
    baseURL:BASE_URL
});