import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function ForgotPassword(props: any) {
  const {navigation} = props;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/images/forgotpassword.png')}
          style={{
            width: wp(80),
            height: hp(45),
            alignSelf: 'center',
            marginTop: hp(6),
          }}
        />
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: hp(0),
          }}>
          Forgot Password
        </Text>
        <Text style={{alignSelf: 'center', marginTop: hp(3), fontSize: wp(4)}}>
          Enter the email address on which your
        </Text>
        <Text style={{alignSelf: 'center', fontSize: wp(4)}}>
          account was registered.
        </Text>

        <Text
          style={{
            fontSize: wp(4),
            fontWeight: '400',
            marginTop: hp(6),
            marginLeft: wp(10.5),
          }}>
          Email Address
        </Text>

        <TouchableOpacity
          style={{
            width: wp(85),
            height: hp(7.5),
            alignSelf: 'center',
            marginTop: wp(4),
            borderWidth: 0.5,
            flexDirection: 'row',
            borderRadius: 12,
            alignItems: 'center',
            paddingHorizontal: wp(0),
          }}>
          <View
            style={{
              width: wp(11),
              height: hp(5.8),
              backgroundColor: 'pink',
              alignSelf: 'center',
              marginTop: hp(0),
              borderRadius: 15,
              marginLeft: wp(2),
            }}>
            <Image
              source={require('../../assets/icons/box.png')}
              style={{
                width: wp(4.8),
                height: hp(3),
                alignSelf: 'center',
                marginTop: wp(2.9),
              }}
            />
          </View>
          <TextInput
            placeholder="abc@gmail.com"
            style={{flex: 1, marginLeft: wp(2)}}
            keyboardType="email-address"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('googleLogin')}
          style={{
            width: wp(85),
            height: hp(8),
            alignSelf: 'center',
            marginTop: hp(8),
            backgroundColor: '#9D0DC5',
            borderRadius: 12,
            justifyContent: 'center',
            marginBottom: hp(4), // add some bottom padding for better spacing
          }}>
          <LinearGradient
            colors={['#E41BD8', '#9D0DC5']}
            style={{
              flex: 1,
              justifyContent: 'center',
              borderRadius: 12,
            }}>
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: '600',
                alignSelf: 'center',
                color: '#FFFFFF',
              }}>
              Forgot Password
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
