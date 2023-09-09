import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useCallback, memo,useState } from "react"
import * as ImagePicker from 'react-native-image-picker';

const Setting = ({ route, navigation }: any) => {
    let datas = route.params;
    console.log('datas', datas)
    let [img,setImg] = useState<string>("https://roseannepark.love/ins_img/roses_are_rosieHeadPortrait.jpg")
    const pressEvent = useCallback(() => {
        navigation.goBack();
    }, [])
    const choseeImage = useCallback(async ()=>{
        const result = await ImagePicker.launchImageLibrary({
            mediaType:"photo",
            includeBase64:true
        })
        console.log('image',result)
        setImg("data:image/png;base64," + result.assets![0].base64!)
    },[])
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.avage}>
                <TouchableOpacity onPress={choseeImage}>
                    <Image source={{ uri: img }} style={styles.image}></Image>
                    <Text>更改头像</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>用户名:</Text>
                <TextInput placeholder="请输入用户名" style={styles.input}></TextInput>
            </View>
            <View>
                <Text>个性签名:</Text>
                <TextInput placeholder="请输入个性签名" style={styles.input}></TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={pressEvent} style={styles.button}>
                    <Text>确定</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#77d2e7"
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#aaa"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    avage: {
        alignItems: 'center',
        justifyContent: "center"
    }
})

export default memo(Setting)
