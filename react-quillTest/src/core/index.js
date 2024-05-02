import axios from "axios";

export const imgAPI = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
});

export const API = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
