import {post,get} from "./request"


export const getInfo = ()=>{
    return get("/api/getInfo")
}

export const getEdge = (data:any)=>{
    return post("/api/getEdge",data)
}

export const getStore = (data:any)=>{
    return post("/api/getStore",data)
}

export const uploadImage = (data:any)=>{
    return post("/api/uploadImage",data=data)
}