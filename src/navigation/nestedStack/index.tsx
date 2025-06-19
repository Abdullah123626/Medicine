import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from '../../screens/homeScreen';
import mainScreen from '../../screens/mainScreen';
import peopleRequesting from '../../screens/peopleRequesting';
import groupChatRequest from '../../screens/groupChatRequest';
import groupStack from '../groupStack';
import { BottomBar } from '../BottomBar';



const Stack = createNativeStackNavigator();

export default function nestedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homeScreen" component={homeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="mainScreen" component={mainScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="peopleRequesting" component={peopleRequesting} options={{ headerShown: false }}/>
      
      <Stack.Screen name="groupChatRequest" component={groupChatRequest} options={{ headerShown: false }}/>
      <Stack.Screen name="groupStack" component={groupStack} options={{ headerShown: false }}/>



    </Stack.Navigator>
  );
}
