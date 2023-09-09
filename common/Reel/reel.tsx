import {View,Image,StyleSheet,Text} from "react-native"
import {transformTime} from "../../utils/utils"

const reel = (props:any)=>{
    // console.log(props.url)
    return (
        <View>
            <Image style={styles.image} source={{uri:props.url}}></Image>
            <Text>{ transformTime(props.text)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        borderRadius:30,
        width:60,
        height:60,
        margin:10,
        resizeMode:"contain"
    }
})


export default reel;