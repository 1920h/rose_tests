
import {View,Text, Image} from "react-native"
import DetailContent from "./DetailContent";

const BASE_URL = "https://roseannepark.love/ins_img/"

const Detail = ({route,navigation}:any)=>{
    let datas = route.params;
    console.log('datas',datas)
    let childrens:any[] = datas?.edge_sidecar_to_children?.split(';') ?? [];
    if(childrens.length!=0 && childrens[childrens.length-1]==''){
        childrens.pop()
    }
    childrens.unshift(datas.shortcode)
    let types:string|any[]|undefined = datas?.edge_sidecar_to_children_type ?? [];
    if(types != undefined){
        types = typeof types == 'string' ? JSON.parse(types as string) : types;
    }else{
        types = new Array(childrens.length)
        types.fill("img")
    }
    (types! as any[]).unshift(datas.media_type == 2 ? 'video': 'img')
    console.log('childrens',childrens)
    console.log('types',types)

    const openComment = ()=>{
        navigation.push("comment",{edgeid:datas.edge_id,comment:datas.edge_media_to_caption})
    }
    return (
        <View style={{flex:1}}>
            <DetailContent childrens={childrens} types={types as string[]} comment={openComment} username={datas.user}></DetailContent>
            <View>
                <Text>{datas.edge_media_to_caption}</Text>
                <Text>共{datas.edge_media_to_comment}条评论</Text>
                <Text>{datas.taken_at_timestamp}</Text>
            </View>
        </View>
    )
}

export default Detail;
