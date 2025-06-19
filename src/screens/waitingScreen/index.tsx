import {View, Text, Image} from 'react-native';
import React, {useCallback} from 'react';
import {hp, wp} from '../../enums/styleGuide';
import {useFocusEffect} from '@react-navigation/native';

export default function WaitingScreen({navigation}) {
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('forgotPassword');
      }, 2000);

      return () => clearTimeout(timer); // Cleanup on unfocus
    }, [])
  );

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../assets/icons/purple.png')}
        style={{
          width: wp(10),
          height: hp(5),
          alignSelf: 'center',
          marginTop: hp(44),
        }}
      />

      <View style={{alignSelf: 'center', marginTop: hp(1)}}>
        <Text style={{fontWeight: '700', fontSize: wp(4.3)}}>
          Registering Account....
        </Text>
        <Text style={{alignSelf: 'center', marginTop: hp(0.7),fontWeight:"500"}}>
          It may take few seconds
        </Text>
      </View>
    </View>
  );
}
