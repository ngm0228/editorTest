import { imgAPI } from "../core";


export const editorTest = async(params) => {
    try {
        const {data} = await imgAPI.post("/test", params);
        return data;
    } catch (e){
        
    }
}