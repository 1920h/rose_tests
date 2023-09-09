import {ScrollView,View,FlatList} from "react-native"
import Reel from "./reel"
import {memo,useMemo} from "react"

const BASE_URL = "https://roseannepark.love/ins_img/"

const Reels = (props:any)=>{
    let reels = useMemo(()=>{
        return (props.data as Array<any>).filter(item=>{
           return item.type == 'reels'
        })
    },[props.data])
    console.log('reels',reels)
    // const reels:any[]  = props.data;
    return (
        <View>
            <FlatList
                style={{columnGap:20,rowGap:20}}
                data={reels}
                renderItem={({item})=>{return <Reel url={BASE_URL + item.media_ids[0] + '.jpg'} text={item.latest_reel_media}></Reel>}}
                keyExtractor={item=>item._id}
                horizontal={true}
            ></FlatList>
            {/* <ScrollView horizontal={true}>
                {reels?.map(item=>{
                    return <Reel url={BASE_URL + item.media_ids[0] + '.jpg'} key={item._id} text={item.latest_reel_media}></Reel>
                })}
            </ScrollView> */}
        </View>
    )
}

export default memo(Reels)
