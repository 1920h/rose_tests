import {post} from "./request";

const getComments = (data:any={})=>{
    return post('/api/getComments',data)
}

export {
    getComments
}
