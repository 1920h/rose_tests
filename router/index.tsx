
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screen/Home/Home"
import Detail from "../screen/Detail/Detail"
import Test from "../screen/Test/test";
import Comment from "../screen/Detail/Comment"
import Main from "../screen/Main/index"
import Login from "../screen/Login/Login"
import Setting from "../screen/Me/Setting"

const Stack = createNativeStackNavigator();

const router = ()=>{
    return (
        <Stack.Navigator initialRouteName="setting">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="detail" component={Detail} />
            <Stack.Screen name="test" component={Test} />
            <Stack.Screen name="comment" component={Comment} />
            <Stack.Screen name="main" component={Main} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="setting" component={Setting} />
        </Stack.Navigator>
    )
}

export default router;