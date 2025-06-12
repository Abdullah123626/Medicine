import { View, Text } from 'react-native'
import React from 'react'
import MainStack from './src/navigation/MainStack'

export default function App() {
  return (
    <View style={{flex:1}} >
      <MainStack/>
    </View>
  )
};