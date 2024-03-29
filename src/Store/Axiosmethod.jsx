import axios from "axios";

const BASIC_URL = "http://192.168.1.10:4001";

export const axiosApi = axios.create({
    baseURL: BASIC_URL,
    withCredentials: true,
})

axiosApi.interceptors.request.use(function(config){
    const token = localStorage.getItem("token");
    if(token) {
        config.headers["Authorization"]="Bearer " + token
    } else {
        console.log("error");
    }
    return config
})