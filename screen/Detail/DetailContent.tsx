
import Carousel from 'react-native-snap-carousel';
import Pagination from "./Pagination";
import {View,useWindowDimensions,Image,Text} from "react-native"
import { Icon } from '@rneui/themed';
import Video from "react-native-video"
import {useState,memo,useCallback,useEffect} from "react"

const BASE_URL = "https://roseannepark.love/ins_img/"

const DetailContent = ({childrens,types,comment,username}:{childrens:any[],types:string[],comment:any,username:string})=>{
    console.log('childrens',childrens)
    let [_index,setIndex] = useState(0)
    const width = useWindowDimensions().width;
    const videoError = (err:any)=>{
        console.log('videoErr',err)
    }
    const BeforeSnapToItem = (_index:number)=>{
        console.log('当前的index',_index)
        setIndex(_index)
    }
    const imageProcess = ({ nativeEvent : { loaded, total } } : any)=>{
        console.log('process',loaded,total)
    }
    const imageError = ()=>{
        console.log('error')
    }
    const imageLoad = ()=>{
        console.log('success')
    }
    const renderItem = useCallback(({item,index}:any)=>{
        console.log(index,"============",BASE_URL+ item +".jpg","========",types![index],types)
        return types[index]!= "video" ?  <Image source={{uri:BASE_URL+ item +".jpg"}} style={{width:width,height:width}} onProgress={imageProcess}  onError={imageError} onLoad={imageLoad}></Image> : <Video source={{uri: BASE_URL + item + ".mp4"}}  onError={videoError} style={{width:"100%",flex:1}} repeat={true} resizeMode="cover" />
    },[])

    useEffect(()=>{
        let type = types[_index+1]
        if(type == 'img'){
            let url =  BASE_URL + childrens[_index+1] + '.jpg'
            Image.prefetch(url)
        }
    },[_index])
    return (
        <View style={{width:"100%",flex:1}}>
            <View style={{marginVertical:10,paddingHorizontal:10,rowGap:5,flexDirection:"row",columnGap:5,alignItems:"center"}}>
                <Image source={{uri:BASE_URL + username + 'HeadPortrait.jpg'}} style={{width:40,height:40,borderRadius:20}}></Image>
                <Text>{username}</Text>
            </View>
            <View style={{width:"100%",flex:1}}>
                <Carousel onBeforeSnapToItem={BeforeSnapToItem} loop={true} data={childrens} itemWidth={width} sliderWidth={width} renderItem={renderItem}></Carousel>
            </View>
            <View style={{flexDirection:"row"}}>
                <Icon name="commenting-o" type="font-awesome" onPress={comment}></Icon>
                <Icon name="share" type="octicons"></Icon>
                {childrens.length != 1 ? <Pagination length={childrens.length} curryIndex={_index}></Pagination> : null}
            </View>
        </View>
    )
}

export default memo(DetailContent)
