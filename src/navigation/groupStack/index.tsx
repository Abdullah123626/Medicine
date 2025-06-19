import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import groupChat from '../../screens/groupChat';
import paymentDone from '../../screens/paymentDone';
import paymentMethod from '../../screens/paymentMethod';
import addCard from '../../screens/addCard';
import giftScreen from '../../screens/giftScreen';
import timeExpires from '../../screens/timeExpires';

const Stack = createNativeStackNavigator();

export default function groupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Group Chat"
        component={groupChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="timeExpires"
        component={timeExpires}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="giftScreen"
        component={giftScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="paymentMethod"
        component={paymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addCard"
        component={addCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="paymentDone"
        component={paymentDone}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
