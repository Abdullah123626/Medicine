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

export default function LoginMethod() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullname] = useState('');
  const [address, setAddress] = useState('');

  const navigation = useNavigation();

  const onLogin = async () => {
    if (
      !fullName.trim() ||
      !address.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const uid = userCredential.user.uid;

      const doc = await firestore().collection('users').doc(uid).get();

      if (!doc.exists) {
        Alert.alert('Error', 'User data not found.');
        await auth().signOut();
        return;
      }

      const userData = doc.data();

      // Check full name and address match
      const nameMatches =
        userData.fullName?.trim().toLowerCase() ===
        fullName.trim().toLowerCase();
      const addressMatches =
        userData.address?.trim().toLowerCase() === address.trim().toLowerCase();

      if (nameMatches && addressMatches) {
        navigation.navigate('home', {email, fullName});
      } else {
        Alert.alert('Error', 'Full Name or Address does not match.');
        await auth().signOut();
      }
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'Incorrect password.');
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'User not found.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'Invalid email format.');
      } else {
        Alert.alert('Login Error', error.message);
      }
      console.log('Login error:', error);
    }
  };

  return (
    <View style={{flex: 1, paddingTop: hp(5)}}>
      <Text style={{fontSize: wp(5), fontWeight: '700', alignSelf: 'center'}}>
        Login Screen
      </Text>

      {/* Full Name */}
      <Text style={label}>Full Name</Text>
      <View style={inputBox}>
        
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullname}
          style={{flex: 1}}
        />
      </View>

      {/* Address */}
      <Text style={label}>Address</Text>
      <View style={inputBox}>
       
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          style={{flex: 1}}
        />
      </View>

      {/* Email */}
      <Text style={label}>Email Address</Text>
      <View style={inputBox}>
        
        <TextInput
          placeholder="abc@gmail.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{flex: 1}}
        />
      </View>

      {/* Password */}
      <Text style={label}>Password</Text>
      <View style={inputBox}>
       
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{flex: 1}}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity onPress={onLogin} style={loginBtn}>
        <Text style={loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const label = {
  fontSize: wp(4),
  marginLeft: wp(10.5),
  marginTop: wp(8),
};

const inputBox = {
  width: wp(80),
  height: hp(8),
  alignSelf: 'center',
  marginTop: wp(2),
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

const loginBtn = {
  width: wp(80),
  height: hp(7.5),
  backgroundColor: 'purple',
  borderRadius: 28,
  marginTop: wp(10),
  alignSelf: 'center',
  justifyContent: 'center',
};

const loginText = {
  fontSize: wp(5),
  fontWeight: '700',
  color: '#FFFFFF',
  alignSelf: 'center',
};
