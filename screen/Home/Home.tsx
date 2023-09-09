import {View,Text,Image,StyleSheet} from "react-native"
import Common from "../../styles/common"
import useReelsDatas from "../../hooks/useReelDatas"
import { useEffect } from "react"
import Reels from "../../common/Reel/Reels"
import Content from "./Content"
import notifee from "@notifee/react-native"


const Home = ({navigation}:{navigation:any})=>{
    let [reels,getReels] = useReelsDatas();
    useEffect(()=>{
        (getReels as Function)();
        notifee.onBackgroundEvent(async ({ type, detail }) => {
            const { notification, pressAction } = detail;
            console.log('============')
            console.log(type);
            console.log(notification);
            console.log(pressAction);
            console.log('============')
            navigation.push("detail",{media_id:"52516525"})
          })
    },[])
    return (
        <View style={{width:"100%",height:"100%"}}>
            <View style={styles.headerTop}>
                <Image style={styles.image}  source={require('../../assest/images/roses_are_rosieHeadPortrait.jpg')}></Image>
                <View style={{...Common.row,...Common.between,...Common.flex1,...Common.around,...Common.vcenter}}>
                    <View style={Common.vcenter}>
                        <Text>931</Text>
                        <Text>帖子</Text>
                    </View>
                    <View style={Common.vcenter}>
                        <Text>72174738</Text>
                        <Text>粉丝</Text>
                    </View>
                    <View style={Common.vcenter}>
                        <Text>0</Text>
                        <Text>关注</Text>
                    </View>
                </View>
            </View>
            <View>
                <View><Text>ROSÉ́</Text></View>
                <View><Text>SHUT DOWN out now U0001f49e</Text></View>
            </View>
            {/* <Reels data={reels}></Reels> */}
            <Content navigation={navigation}></Content>
        </View>
    )
}


const styles = StyleSheet.create({
    image:{
        borderRadius: 50,
        width: 100,
        height:100
    },
    headerTop:{
        flexDirection:'row',
    }
})


export default Home;