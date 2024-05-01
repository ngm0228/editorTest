import { imgAPI } from "../core";


export const editorTest = async(params) => {
    try {
        const {data} = await imgAPI.post("/user/test", params);
        return data;
    } catch (e){
        console.log(e);
    }
}