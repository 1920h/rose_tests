import { View, Text, Image, FlatList,TouchableWithoutFeedback,useWindowDimensions } from "react-native"
import { Tab, TabView, Icon } from "@rneui/themed"
import { useState, memo, useEffect } from "react"
import useContentDatas from "../../hooks/useContentDatas"


const ContentImage = ({ media_id, children, imageStyle = {},type="img",pressEvent }: any) => {
  let url = "https://roseannepark.love/ins_img/" + media_id + '.jpg';
  // console.log("url", url)
  return (
    <TouchableWithoutFeedback onPress={pressEvent}>
      <View  style={{ width: "32%", height: "auto", aspectRatio: type == 'img' ? 1 : 0.5, marginLeft: "1%", marginBottom: "1%", position: "relative" }}>
        <Image source={{ uri: url,cache:"force-cache" }} resizeMethod="auto" resizeMode="cover" style={{ width: "100%", height: "100%", ...imageStyle }}></Image>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

const Content = (props: any) => {
  let [index, setIndex] = useState(0);
  let [contents, getContents] = useContentDatas();
  let [videoContents, getVideoContents] = useContentDatas();
  let [isRefresh, setRefresh] = useState(false)
  let [page, setPage] = useState(1);
  let [videoPage, setVideoPage] = useState(0);

  const imagePress = (datas:any)=>{
    console.log(datas)
    props.navigation.navigate("detail",datas)
  }
  
  const videoPress = (datas:any)=>{
    console.log(datas)
    props.navigation.navigate("detail",datas)
  }

  useEffect(() => {
    setRefresh(item => item = true)
    getContents(page).then((res: any) => {
      console.log("请求已经结束")
      setRefresh(item => item = false)
    })
  }, [page])
  useEffect(() => {
    if (index == 1) {
      setRefresh(item => item = true)
      getVideoContents(page, true).then((res: any) => {
        console.log("请求已经结束")
        setRefresh(item => item = false)
      })
    }
  }, [videoPage])
  console.log('contents', contents)
  return (
    <View style={{ flex: 1 }}>
      <Tab
        value={index}
        onChange={(e) => {
          setIndex(e)
          if (e == 1 && videoContents.length == 0) {
            setVideoPage(page => page + 1)
          }
        }}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%' }}>
          <FlatList
            contentContainerStyle={{ width: "100%" }}
            data={contents}
            refreshing={isRefresh}
            numColumns={3}
            renderItem={({ item }) => {
              return <ContentImage media_id={item.shortcode} pressEvent={()=>imagePress(item)}>
                <View style={{ position: "absolute", right: "5%" }}>
                  <Icon
                    color="#0CC"
                    containerStyle={{}}
                    disabledStyle={{}}
                    iconStyle={{}}
                    name="devices"
                    onLongPress={() => console.log("onLongPress()")}
                    onPress={() => console.log("onPress()")}
                    size={30}
                    type="material"
                  />
                </View>
              </ContentImage>
            }}
            keyExtractor={item => item.edge_id}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => {
              console.log('滚动距离不足', distanceFromEnd)
              setPage(page => page + 1)
            }}
          ></FlatList>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <FlatList
            contentContainerStyle={{ width: "100%" }}
            data={videoContents}
            refreshing={isRefresh}
            numColumns={3}
            renderItem={({ item }) => {
              return <ContentImage media_id={item.shortcode} imageStyle={{ height: "200%" }} type="video" pressEvent={()=>videoPress(item)}>
                <View style={{ position: "absolute", left: "5%", bottom: 0 }}>
                  <Icon
                    color="#0CC"
                    containerStyle={{}}
                    disabledStyle={{}}
                    iconStyle={{}}
                    name="devices"
                    onLongPress={() => console.log("onLongPress()")}
                    onPress={() => console.log("onPress()")}
                    size={30}
                    type="material"
                  />
                </View>
              </ContentImage>
            }}
            keyExtractor={item => item.edge_id}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => {
              console.log('滚动距离不足', distanceFromEnd)
              setVideoPage(page => page + 1)
            }}
          ></FlatList>
        </TabView.Item>
      </TabView>
    </View>
  )
}

export default memo(Content)