

const transformTime = (timeVal:string|number)=>{
    let date = new Date(timeVal);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let today = date.getDate();
    return year + '-' + month + '-' + today;
}



export {
    transformTime
}