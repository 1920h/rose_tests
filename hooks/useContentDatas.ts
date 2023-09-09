import { useState,useEffect } from "react";
import {getEdge} from "../api/home"

export default ():[Array<any>,Function,Function]=>{
    let [contents,setContent] = useState(<any>[]);
    let [page,setPage] = useState<number>(1);
    let [isVideo,setVideo] = useState<boolean>(false)
    let getEdges = async (page:number=1,isVideo:boolean=false)=>{
        console.log('开始发送请求')
        let response = await getEdge({page:page,isVideo:isVideo});
        console.log(response)
        setContent((item:any)=>{
            return [
                ...item,
                ...response.data.data
            ]
        })
    }
    useEffect(()=>{
        getEdges(page,isVideo)
    },[page])
    return [contents,setPage,setVideo]
}
