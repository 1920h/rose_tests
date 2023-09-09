import { View, Text } from "react-native"
import DetailContent from "../Detail/DetailContent"
import {memo} from "react"


const Item = ({ childrens, types, data, openDetail,username }: any) => {
    console.log('childrenschildrens',childrens)
    return (<View style={{ flex: 1 }}>
        <DetailContent childrens={childrens} types={types as string[]} comment={openDetail} username={username}></DetailContent>
        <View>
            <Text>{data.edge_media_to_caption}</Text>
            <Text>共{data.edge_media_to_comment}条评论</Text>
            <Text>{data.taken_at_timestamp}</Text>
        </View>
    </View>
    )
}

export default memo(Item);