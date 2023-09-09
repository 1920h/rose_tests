import {useState} from "react"
import {getInfo} from "../api/home"

const useReelDatas = ()=>{
    let [reels,setReels] = useState<any[]>([]);
    let getReels = async ()=>{
        let datas = await getInfo();
        console.log(datas);
        setReels(datas.data.data)
    }
    return [reels,getReels]
}

export default useReelDatas;