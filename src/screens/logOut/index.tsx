import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {hp, wp} from '../../enums/styleGuide';
import auth from '@react-native-firebase/auth';

export default function logOut() {
 

  const onLogOut = () => {
auth()
.signOut()
.then(response => {
    Alert.alert ('user sign Out');
})
.catch (error=>{
    Alert.alert('Not able to logout')
});
  };

  return (
    <View style={{flex: 1, paddingTop: hp(5)}}>

      <Text style={{fontSize: wp(5), fontWeight: '700', alignSelf: 'center'}}>
        Log Out
      </Text>

      {/* Email Field */}
      <Text style={{fontSize: wp(4), marginLeft: wp(10.5), marginTop: wp(15)}}>
        Email Address
      </Text>
      <View
        style={{
          width: wp(80),
          height: hp(8),
          alignSelf: 'center',
          marginTop: wp(4),
          borderWidth: 0.5,
          flexDirection: 'row',
          borderRadius: 8,
          alignItems: 'center',
          paddingHorizontal: wp(2),
        }}>
        <Image
          source={require('../../assets/icons/box.png')}
          style={{width: wp(5), height: hp(3), marginRight: wp(2)}}
        />
        <TextInput
          placeholder="abc@gmail.com"
         
          style={{flex: 1}}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      {/* Password Field */}
      <Text style={{fontSize: wp(4), marginTop: hp(2.5), marginLeft: wp(10.5)}}>
        Password
      </Text>
      <View
        style={{
          width: wp(80),
          height: hp(8),
          alignSelf: 'center',
          marginTop: wp(4),
          borderWidth: 0.5,
          flexDirection: 'row',
          borderRadius: 8,
          alignItems: 'center',
          paddingHorizontal: wp(2),
        }}>
        <Image
          source={require('../../assets/icons/lock.png')}
          style={{width: wp(4.4), height: hp(2.5), marginRight: wp(2)}}
        />
        <TextInput
          placeholder="password"
         
          secureTextEntry
          style={{flex: 1}}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity
        onPress={onLogOut}
        style={{
          width: wp(80),
          height: hp(6),
          backgroundColor: 'yellow',
          borderRadius: 28,
          marginTop: wp(10),
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: wp(4),
            fontWeight: '500',
            color: 'black',
            alignSelf: 'center',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
