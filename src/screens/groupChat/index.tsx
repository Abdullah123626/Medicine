import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {hp,wp} from "../../enums/styleGuide"

export default function groupChat(props:any) {
  const {navigation}=props
  return (
    <View>
       <LinearGradient
        colors={['#E41BD8', '#9D0DC5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: wp(80),
          height: hp(7),
          alignSelf: 'center',
          marginTop: hp(7),
          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("timeExpires")}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text style={{
            alignSelf: 'center',
            color: '#FFFFFF',
            fontWeight: '600',
            fontSize: wp(4.5),
          }}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}