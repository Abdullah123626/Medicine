import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {hp, wp} from '../../enums/styleGuide';

export default function profileScreen() {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: wp(5),
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: wp(5),
        }}>
        index
      </Text>
      <View
        style={{
          width: wp(90),
          height: hp(50),
          backgroundColor: '#FFFFFF',
          alignSelf: 'center',
          marginTop: wp(10),
          borderRadius: wp(3),
        }}>
        <Image
          source={require('../../assets/images/chandpurple.png')}
          style={{
            width: wp(40),
            height: wp(40),
            alignSelf: 'center',
            marginTop: wp(4),
          }}
        />
        <Text
          style={{
            fontSize: wp(4),
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: wp(0),
            color: '#FFFFFF',
          }}>
          Are You Sure
        </Text>
        <View style={{alignSelf:"center",marginTop:wp(4)}}>
          <Text style={{fontSize:wp(3.5)}}>You need to cancel Jamat to</Text>
          <Text style={{alignSelf:"center",fontSize:wp(3.5)}}>connect to other.</Text>
        </View>
        <TouchableOpacity style={{width:wp(70),height:hp(6.5),alignSelf:"center",marginTop:wp(5),borderRadius:12,backgroundColor:"#9D0DC5",justifyContent:"center"}}>
          <Text style={{fontSize:wp(4.2),fontWeight:"700",alignSelf:"center",color:"#FFFFFF"}}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:wp(70),height:hp(6.5),alignSelf:"center",marginTop:wp(5),justifyContent:"center",borderRadius:12,backgroundColor:"#FFFFFF",borderWidth:1}}>
          <Text style={{fontSize:wp(4),fontWeight:"700",alignSelf:"center",}}>Back</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
