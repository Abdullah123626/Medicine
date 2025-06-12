import React, {useCallback} from 'react';
import {View, Image} from 'react-native';
import {hp, wp} from '../../enums/styleGuide';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

export default function FirstScreen() {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('loginScreen');
      }, 2000);

      return () => clearTimeout(timer); // Clear timeout on unfocus/unmount
    }, [])
  );

  return (
    <View style={{flex: 1, backgroundColor: '#9D0DC5'}}>
      <View>
        <Image
          source={require('../../assets/images/salahjamat.png')}
          style={{
            width: wp(45),
            height: hp(22),
            alignSelf: 'center',
            marginTop: hp(35),
          }}
        />
      </View>
      <Image
        source={require('../../assets/icons/goll.png')}
        style={{
          width: wp(10),
          height: hp(5),
          alignSelf: 'center',
          marginTop: hp(35),
        }}
      />
    </View>
  );
}
