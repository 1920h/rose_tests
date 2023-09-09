import {View,ImageBackground,TouchableOpacity,Text} from "react-native"


const Login = ()=>{
    const pressEvent = ()=>{

    }
    return (
        <View style={{flex:1}}>
            <ImageBackground source={{uri:"https://roseannepark.love/ins_img/CsrwwYeyOJg.jpg"}} style={{width:"100%",flex:1,justifyContent:"flex-end"}}>
                <TouchableOpacity style={{marginBottom:10,marginHorizontal:10,padding:13,borderRadius:25,backgroundColor: "#DDDDDD",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Text>微信登录</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Login;