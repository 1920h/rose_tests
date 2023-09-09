import {View,FlatList, Image,Text,ActivityIndicator,StyleSheet} from "react-native"
import useStoreDatas from "../../hooks/useStoreDatas";
import Item from "./item"
import useContentDatas from "../../hooks/useContentDatas";
import {useState,useCallback} from "react"
import {transformTime} from "../../utils/utils"

const BASE_URL = "https://roseannepark.love/ins_img/"

const Main = ({navigation}:any)=>{
    let [stores,setPage] = useStoreDatas();
    let [edges,setEdgePage] = useContentDatas();
    let [isLoading,setLoading] = useState(false);
    const openDetail = ()=>{
        navigation.navigate("detail",{})
    }
    const _renderItem = useCallback(({item}:any):JSX.Element=>{
        let datas = item;
        console.log('renderitem',datas)
        let childrens:any[] = datas?.edge_sidecar_to_children?.split(';') ?? [];
        if(childrens.length!=0 && childrens[childrens.length-1]==''){
            childrens.pop()
        }
        childrens.unshift(datas.shortcode)
        let types:any[] = datas?.edge_sidecar_to_children_type ?? [];
        (types! as any[]).unshift(datas.media_type == 2 ? 'video': 'img')
        // console.log('childrens2',childrens)
        return <Item childrens={childrens} types={types} comment={openDetail} data={datas} username={datas.user}></Item>
    },[])
    const _storeRenterItem = useCallback(({item}:any)=>{
        let cover = item.media_ids[0]
        let times = item.expiring_at;
        return (
            <View style={styles.storeItem}>
                <Image source={{uri:BASE_URL+ cover + '.jpg'}} style={styles.circlt}></Image>
                <Text>{transformTime(times)}</Text>
            </View>
        )
    },[])
    const loadEdge = useCallback(()=>{
        setLoading(true)
        setEdgePage((page:number)=>page+1)
        setLoading(false)
    },[])
    return (
        <View>
            {isLoading ? <ActivityIndicator/>:''}
            <FlatList
            data={stores}
            renderItem={_storeRenterItem}
            keyExtractor={item=>item._id}
            horizontal={true}
            ></FlatList>
            <View style={{height:5,width:"100%"}}></View>
            <FlatList
            data={edges}
            renderItem={_renderItem}
            keyExtractor={item=>item.edge_id}
            onEndReachedThreshold={0.3}
            onEndReached={loadEdge}
            ></FlatList>
        </View> 
    )   
}

const styles = StyleSheet.create({
    circlt:{
        width:50,
        height:50,
        borderRadius:25
    },
    storeItem:{
        margin:5
    }
})

export default Main;