
import {View,StyleSheet} from "react-native"
import {useMemo} from "react"

const Pagination = ({length,curryIndex}:{length:number,curryIndex:number})=>{
    const items = useMemo(()=>{
        return new Array<any>(length).fill(1)
    },[length])
    console.log('items',items,items.length)
    return (
        <View style={styles.container}>
            {items.map((item,index)=>{
                const bools = curryIndex==index
                let obj = {...styles.item};
                if(bools) Object.assign(obj,styles.active)
                // console.log(obj)
                return <View style={obj} key={index}></View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:20,
        rowGap:3,
        columnGap:3
    },
    item:{
        backgroundColor:"#aaa",
        width:6,
        height:6,
        borderRadius:3,
        
    },
    active:{
        width:8,
        height:8,
        borderRadius:4
    }
})

export default Pagination;

