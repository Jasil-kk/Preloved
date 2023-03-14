import axios from "axios";

const BASIC_URL = "http://192.168.29.54:4001";

export const axiosApi = axios.create({
    baseURL: BASIC_URL,
    withCredentials: true,
})

axiosApi.interceptors.request.use(function(config){
    const token = localStorage.getItem("token");
    if(token) {
        config.headers["Authorization"] = "Token" + token;
    } else {
        console.log("error");
    }
    return config
})