import {useState} from "react"
import {getComments as getComment} from "../api/comment"

interface commnent{
    page:number,
    edgeid:string|number
}

const useCommentDatas = ():[any[],Function]=>{
    let [comments,setComments] = useState<any[]>([]);
    const getComments = (datas:commnent)=>{
        getComment(datas).then(res=>{
            console.log(res)
            setComments(item=>{
                return [
                    ...item,
                    ...res.data.data
                ]
            })
        }).catch(err=>{
            console.log('err',err)
        })
    }
    return [comments,getComments]
}

export default useCommentDatas;