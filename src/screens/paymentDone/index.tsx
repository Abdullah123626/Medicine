import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { hp, wp } from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function paymentDone(props) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Tick Image */}
      <Image
        source={require('../../assets/images/purpleTick.png')}
        style={{
          width: wp(60),
          height: hp(30),
          alignSelf: 'center',
          marginTop: hp(16),
        }}
      />

      {/* Heading Text */}
      <View style={{ alignSelf: 'center', marginTop: wp(8) }}>
        <Text style={{ fontSize: wp(5), fontWeight: '700' }}>
          Payment has been made
        </Text>
        <Text style={{ fontSize: wp(5), fontWeight: '700', alignSelf: 'center',marginTop:wp(2) }}>
          successfully.
        </Text>
      </View>

      {/* Description */}
      <View style={{ marginTop: hp(4), alignSelf: 'center', width: wp(90), gap: 6 }}>
        <Text style={{ fontSize: wp(4), alignSelf: 'center', fontWeight: '300' }}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Text style={{ fontSize: wp(4), alignSelf: 'center', fontWeight: '300' }}>
          Nam tincidunt rutrum imperdiet dictumst in.
        </Text>
        <Text style={{ fontSize: wp(4), alignSelf: 'center', fontWeight: '300' }}>
          Id eget lacus id non.
        </Text>
      </View>

      {/* Back to Home Button */}
      <LinearGradient
        colors={['#E41BD8', '#9D0DC5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: wp(80),
          height: hp(7.5),
          alignSelf: 'center',
          marginTop: hp(7),
          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home', { screen: 'homeScreen' })}
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
  );
}
