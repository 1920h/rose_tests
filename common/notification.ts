import notifee ,{ AuthorizationStatus }from "@notifee/react-native"

const notify = async ()=>{
    let status = await notifee.requestPermission();
    if(status.authorizationStatus!=AuthorizationStatus.DENIED){
        const channelId = await notifee.createChannel({
            id:"default",
            name:"default channel"
        })
        notifee.displayNotification({
            title:"test notify",
            body:"test",
            android:{
                channelId:channelId,
                autoCancel:true,
                pressAction:{
                    id:"detail",
                    mainComponent: "detail"
                }
            }
        })
    }
}

const DETAIL = "detail"

const notifyEvents = {
    DETAIL:(navigation:any,data:any)=>{
        navigation.push("detail",data)
    }
}

export {
    notifyEvents
}

export default notify;