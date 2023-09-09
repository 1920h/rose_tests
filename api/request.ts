import axios from "axios"
const BASE_URL = "https://www.roseannepark.love"


const request = axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type': 'application/json'
    }
})

// const post = (url:string,data={})=>{
//     console.log('开始发送post请求',BASE_URL+url)
//     return fetch("https://www.roseannepark.love:3001/api/getInfo",{
//         method:"GET",
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         ...data
//     }).then(res=>{
//         console.log('res=',res)
//     }).catch(err=>{
//         console.log('err',err)
//     })
// }

// const get = (url:string,data={})=>{
//     return fetch(url,{
//         method:"GET",
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         ...data
//     })
// }

const post = (url:string,data:any={})=>{
    return request.post(url,data)
}

const get = (url:string)=>{
    return request.get(url)
}

export {
    post,
    get
}
