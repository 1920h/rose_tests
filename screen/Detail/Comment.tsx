import {View,Text,StyleSheet,Image,ScrollView, TextInput} from "react-native"
import useCommentDatas from "../../hooks/useCommentDatas"
import {useEffect,useState,useMemo} from "react"
import {Divider} from "@rneui/themed"

const BASE_URL = "https://roseannepark.love/ins_img/"
const COMMENT_URL = "https://roseannepark.love/comment_user/"
const Comment = (props:any)=>{
    let params = props.route.params;
    console.log('props',params)
    let [commons,getComments] = useCommentDatas();
    let [page,setPage] = useState(1)
    useEffect(()=>{
        getComments({
            page,
            edgeid:"1848324530867845255"
        })
    },[page])
    const imageLoad = ()=>{
        console.log('success')
    }
    const imageError = ()=>{
        console.log('err')
    }
    const renderItem = ()=>{
        return commons.map((item,index)=>{
            let user = JSON.parse(item.user.replaceAll("'",'"').replaceAll("False","false").replaceAll("True","true"));
            console.log('item.user.username',COMMENT_URL + item.user_id + ".jpg")
            return (<View style={styles.contentItem} key={item.pk}>
                <Image source={{uri:COMMENT_URL + item.user_id + ".jpg"}} style={styles.image} resizeMode="cover" onLoad={imageLoad} onError={imageError}></Image>
                <View>
                    <Text>{user.username}</Text>
                    <Text>{item.text}</Text>
                </View>
            </View>)
        })
    }
    return (
        <View style={{flex:1}}>
            {/* 头部 */}
            <View style={styles.header}>
                <Image source={{uri:BASE_URL + "roses_are_rosieHeadPortrait.jpg"}} style={styles.image}></Image>
                <Text>{params?.comment}</Text>
            </View>
            <Divider></Divider>
            <View style={styles.content}>
                <ScrollView>
                    {renderItem()}
                </ScrollView>
            </View>
            <View style={styles.footed}>
                <TextInput style={styles.input} placeholder="发表评论" returnKeyType="send"></TextInput>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    footed:{
        height:"auto"
    },
    header:{
        height:"10%",
        flexDirection:"row",
        alignItems:"center",
        columnGap:10
    },
    content:{
        marginTop:5,
        flex:1,
        rowGap:10,
        columnGap:10
    },
    contentItem:{
        width:"100%",
        flexDirection:"row",
        rowGap:10,
        columnGap:10,
        marginVertical:3
    },
    input:{
        borderColor:"#aaa",
        borderWidth:1,
        borderStyle:"solid"
    },
    image:{
        width:50,
        height:50,
        borderRadius:25
    }
})

export default Comment;