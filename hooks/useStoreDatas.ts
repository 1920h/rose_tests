import {getStore} from "../api/home"
import {useState,useEffect} from "react"


const useStoreDatas = ():[any[],Function]=>{
    let [stores,setStores] = useState<any[]>([])
    let [page,setPage] = useState(1)
    const getStores = async ()=>{
        const res = await getStore({page:page})
        console.log('res',res)
        setStores(stores=>{
            return [
                ...stores,
                ...res.data.data
            ]
        })
    }
    useEffect(()=>{
        console.log('page',page)
        getStores()
    },[page])
    return [stores,setPage]
}

export default useStoreDatas;