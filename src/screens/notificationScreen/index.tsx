import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {hp, wp} from '../..//enums/styleGuide';

export default function notificationScreen(props:any) {
  const {navigation} =props
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('../../assets/images/medi.png')}
          style={{
            width: wp(60),
            height: wp(40),
            alignSelf: 'center',
            marginTop: wp(5),
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: wp(6),
          fontWeight: '700',
          marginTop: wp(3),
          color: '#409BFF',
        }}>
        Create Your Account
      </Text>
      <View style={{alignSelf: 'center', marginTop: wp(5)}}>
        <Text style={{fontSize: wp(3.7), fontWeight: '400'}}>Name</Text>
        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(6),
            borderWidth: 0.5,
            marginTop: wp(2),
            borderRadius: 8,
          }}>
          <TextInput placeholder="Enter your name" style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>

      <View style={{alignSelf: 'center', marginTop: wp(4)}}>
        <Text style={{fontSize: wp(3.7), fontWeight: '400'}}>
          Email or Phone Number
        </Text>
        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(6),
            borderWidth: 0.5,
            marginTop: wp(2),
            borderRadius: 8,
          }}>
          <TextInput
            placeholder="Enter your email or phone number"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>

      <View style={{alignSelf: 'center', marginTop: wp(4)}}>
        <Text style={{fontSize: wp(3.7), fontWeight: '400'}}>Password</Text>
        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(6),
            borderWidth: 0.5,
            marginTop: wp(2),
            borderRadius: 8,
          }}>
          <TextInput placeholder="Create a password" style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>

      <View style={{alignSelf: 'center', marginTop: wp(4)}}>
        <Text style={{fontSize: wp(3.7), fontWeight: '400'}}>
          Confirm Password
        </Text>
        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(6),
            borderWidth: 0.5,
            marginTop: wp(2),
            borderRadius: 8,
          }}>
          <TextInput
            placeholder="Confirm your password"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      onPress={()=>navigation.navigate("timeExpires")}
        style={{
          width: wp(80),
          height: hp(4.5),
          alignSelf: 'center',
          marginTop: wp(7),
          borderRadius: 20,
          backgroundColor: '#409BFF',
          justifyContent: 'center',
        }}>
        <Text
          style={{fontSize: wp(3.5), fontWeight: '700', alignSelf: 'center'}}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: wp(80),
          height: hp(4),
          alignSelf: 'center',
          marginTop: wp(4),
          borderRadius: 20,
          backgroundColor: '#409BFF1A',
          justifyContent: 'center',
        }}>
        <Text
          style={{fontSize: wp(3.5), fontWeight: '700', alignSelf: 'center'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
