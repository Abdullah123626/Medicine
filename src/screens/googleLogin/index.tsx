import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../enums/styleGuide';

export default function GoogleLogin() {
  const navigation = useNavigation(); // ✅ for navigation

  GoogleSignin.configure({
    webClientId: '', // 🔑 Paste your real WebClientID here from Firebase console
  });

  const onGoogleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      const signInResult = await GoogleSignin.signIn();

      const idToken = signInResult.idToken;
      if (!idToken) throw new Error('No ID token found');

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      // ✅ Navigate to logout screen on success
      navigation.navigate('logout');

    } catch (error) {
      console.log('Google Signin Error:', error);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: wp(4), marginLeft: wp(10.5), marginTop: wp(6) }}>
        Email Address
      </Text>
      <View style={inputContainer}>
        <Image source={require('../../assets/icons/box.png')} style={iconStyle} />
        <TextInput
          placeholder="abc@gmail.com"
          style={{ flex: 1 }}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <Text style={{ fontSize: wp(4), marginTop: hp(2.5), marginLeft: wp(10.5) }}>
        Password
      </Text>
      <View style={inputContainer}>
        <Image source={require('../../assets/icons/lock.png')} style={iconStyle} />
        <TextInput
          placeholder="***************"
          secureTextEntry
          style={{ flex: 1 }}
        />
        <Image
          source={require('../../assets/images/eye.png')}
          style={{ width: wp(6), height: hp(3), marginLeft: wp(2) }}
        />
      </View>

      <TouchableOpacity onPress={onGoogleSignin}>
        <Text style={{
          fontSize: wp(4),
          fontWeight: '500',
          marginTop: hp(8),
          alignSelf: 'center',
        }}>
          Register Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// 🔁 Styles
const inputContainer = {
  width: wp(80),
  height: hp(8),
  alignSelf: 'center',
  marginTop: wp(4),
  borderWidth: 0.5,
  flexDirection: 'row',
  borderRadius: 8,
  alignItems: 'center',
  paddingHorizontal: wp(2),
};

const iconStyle = {
  width: wp(5),
  height: hp(3),
  marginRight: wp(2),
};
