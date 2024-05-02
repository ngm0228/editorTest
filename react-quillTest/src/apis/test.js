import { API, imgAPI } from "../core";


export const editorTest = async(params) => {
    try {
        const {data} = await imgAPI.post("/user/test", params);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const imgDelete = async(params) => {
    try {
        const {data} = await API.post("/user/imgDelete", params);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const imgMove = async(params) => {
    try {
        const {data} = await API.post("/user/imgMove", params);
        return data;
    } catch (e) {
        console.log(e);
    }
}