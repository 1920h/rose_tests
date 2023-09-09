import {StyleSheet} from "react-native"


const common = StyleSheet.create({
    column:{
        flexDirection:'column'
    },
    row:{
        flexDirection: 'row'
    },
    flex1:{
        flex:1
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    between:{
        justifyContent:'space-between'
    },
    around:{
        justifyContent:'space-around'
    },
    vcenter:{
        alignItems:"center"
    },
    hcenter:{
        justifyContent:"center"
    },
    fixed:{
        
    }
})

export default common;