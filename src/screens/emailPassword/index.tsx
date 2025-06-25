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
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

export default function EmailPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullname] = useState('');
  const [adress, setAdress] = useState('');

  const navigation = useNavigation();

  const onRegister = async () => {
    if (!fullName || !adress || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      // Step 1: Create user in Firebase Auth
      const userCredential = await auth().createUserWithEmailAndPassword(
        email.trim(),
        password,
      );
      const uid = userCredential.user.uid;

      // Step 2: Save user profile to Firestore
      await firestore().collection('users').doc(uid).set({
        fullName: fullName.trim(),
        address: adress.trim(),
        email: email.trim(),
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      // ✅ Alert with OK to reset and navigate
      Alert.alert('Success', 'User account created & data saved!', [
        {
          text: 'OK',
          onPress: () => {
            // Clear fields
            setFullname('');
            setAdress('');
            setEmail('');
            setPassword('');
            // Navigate
            navigation.navigate('loginMethod');
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Registration Error', error.message);
      console.log('Registration Error:', error);
    }
  };

  return (
    <View style={{flex: 1, paddingTop: hp(5)}}>
      {/* Full Name */}
      <Text style={{fontSize: wp(4), marginLeft: wp(10.5), marginTop: wp(6)}}>
        Full Name
      </Text>
      <View style={inputContainer}>
        <Image
          source={require('../../assets/icons/box.png')}
          style={iconStyle}
        />
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullname}
          style={{flex: 1}}
          autoCapitalize="words"
        />
      </View>

      {/* Address */}
      <Text style={{fontSize: wp(4), marginLeft: wp(10.5), marginTop: wp(6)}}>
        Address
      </Text>
      <View style={inputContainer}>
        <Image
          source={require('../../assets/icons/box.png')}
          style={iconStyle}
        />
        <TextInput
          placeholder="Address"
          value={adress}
          onChangeText={setAdress}
          style={{flex: 1}}
          autoCapitalize="words"
        />
      </View>

      {/* Email */}
      <Text style={{fontSize: wp(4), marginLeft: wp(10.5), marginTop: wp(6)}}>
        Email Address
      </Text>
      <View style={inputContainer}>
        <Image
          source={require('../../assets/icons/box.png')}
          style={iconStyle}
        />
        <TextInput
          placeholder="abc@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={{flex: 1}}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      {/* Password */}
      <Text style={{fontSize: wp(4), marginTop: hp(2.5), marginLeft: wp(10.5)}}>
        Password
      </Text>
      <View style={inputContainer}>
        <Image
          source={require('../../assets/icons/lock.png')}
          style={iconStyle}
        />
        <TextInput
          placeholder="***************"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{flex: 1}}
        />
        <Image
          source={require('../../assets/images/eye.png')}
          style={{width: wp(6), height: hp(3), marginLeft: wp(2)}}
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity onPress={onRegister} style={{width:wp(80)}}>
        <Text
          style={{
            fontSize: wp(4),
            fontWeight: '500',
            marginTop: hp(8),
            alignSelf: 'center',
          }}>
          Register Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate("loginMethod")}
        style={{
          width: wp(80),
          height: hp(7.5),
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 28,
          backgroundColor: 'purple',
          marginTop: hp(10),
        }}>
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: '700',
            alignSelf: 'center',
            color: '#FFFFFF',
          }}>
          I have account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// 🔁 Reusable Styles
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
