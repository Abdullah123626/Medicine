import { View, Text } from 'react-native'
import React from 'react'
import {hp,wp} from "../..//enums/styleGuide"

export default function notificationScreen() {
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:wp(5),fontWeight:"bold",alignSelf:"center",marginTop:wp(5)}}>index</Text>
    </View>
  )
}