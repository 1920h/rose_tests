import {TouchableNativeFeedback, Text,Button, ScrollView,View, FlatList} from "react-native"
import notify from "../../common/notification"
import {useEffect} from "react"
import notifee from "@notifee/react-native"

const Test = ({navigation}:any)=>{
    // useEffect(()=>{
    //     notifee.onBackgroundEvent(async ({ type, detail }) => {
    //         const { notification, pressAction } = detail;
    //         console.log('============')
    //         console.log(type);
    //         console.log(notification);
    //         console.log(pressAction);
    //         console.log('============')
    //         navigation.push("detail",{media_id:"52516525"})
    //       })
    // },[])
    const items:any[] = ["525262581262","6587955642262","5969293655465","5262658452162562"]
    const colors:string[] = ['red','blue','black','green']
    // const _renderItem = ({item,index}:any)=>{
    const _renderItem = ()=>{
        return items.map((item,index)=>{
          return <View style={{height:300,width:375,backgroundColor:"red"}} key={index}><Text style={{width:"100%",backgroundColor:colors[index]}}>{item}</Text></View>  
        // return <View style={{height:300,width:"100%",backgroundColor:"red"}} key={index}><Text style={{width:"100%",backgroundColor:colors[index]}}>{item}</Text></View>  
        })
    }
    return (
        <View style={{flex:1}}>
            <ScrollView contentOffset={{x:0,y:0}} horizontal={true}>
                {_renderItem()}
            </ScrollView>
            {/* <FlatList
            horizontal={true}
            data={items}
            keyExtractor={item=>item}
            renderItem={_renderItem}
            ></FlatList> */}
        </View>
        // <Button onPress={()=>notify()} title="消息"></Button>
    )
}

export default Test;
