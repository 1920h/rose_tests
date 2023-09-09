/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer,useNavigation,NavigationContext} from "@react-navigation/native"
import Stack from "./router/index"
import notifee,{EventType} from "@notifee/react-native"
import {notifyEvents} from "./common/notification"

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;
  console.log('============')
  console.log(type);
  console.log(notification);
  console.log(pressAction);
  console.log('============')
})

function App(): JSX.Element {

  const receiverNotify = async ()=>{
    const notification = await notifee.getInitialNotification();
    if(notification){
      console.log('这是通知哦')
      console.log('notify==',notification.notification,notification.input,notification.pressAction)
      
    }

  }

  React.useEffect(()=>{
    // receiverNotify().then(res=>{
    //   console.log('通知',res)
    // })
    return notifee.onForegroundEvent(({ type, detail })=>{
      console.log('前台服务')
      console.log(type)
      console.log(detail)
      console.log('前台服务')
    })
  },[])

  return (
    <NavigationContainer>
      {/* <SafeAreaView>
        <Home></Home>
      </SafeAreaView> */}
      <Stack></Stack>
    </NavigationContainer>
  );
}

export default App;
