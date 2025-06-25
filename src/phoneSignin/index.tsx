import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { hp, wp } from '../enums/styleGuide';
import auth from '@react-native-firebase/auth';

export default function PhoneSignin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  // Send OTP
  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      Alert.alert('OTP Sent', 'Please enter the verification code.');
    } catch (error) {
      console.error('Sign-in error:', error);
      Alert.alert('Error', error.message);
    }
  };

  // Confirm OTP
  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      Alert.alert('Success', 'Phone authentication successful!');
      // navigate to next screen here if needed
    } catch (error) {
      console.error('Invalid code.', error);
      Alert.alert('Error', 'Invalid verification code.');
    }
  };

  return (
    <View style={{ paddingTop: hp(10), paddingHorizontal: wp(10) }}>
      {/* Phone Input */}
      {!confirm && (
        <>
          <Text style={{ marginBottom: hp(1) }}>Enter Phone Number</Text>
          <TextInput
            placeholder="+1 650-555-3434"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginBottom: hp(2),
            }}
            keyboardType="phone-pad"
          />
          <TouchableOpacity
            onPress={signInWithPhoneNumber}
            style={{
              width: '100%',
              height: hp(6),
              backgroundColor: 'black',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#fff' }}>Send OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {/* OTP Input */}
      {confirm && (
        <>
          <Text style={{ marginTop: hp(4), marginBottom: hp(1) }}>Enter OTP Code</Text>
          <TextInput
            placeholder="123456"
            value={code}
            onChangeText={setCode}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginBottom: hp(2),
            }}
            keyboardType="number-pad"
          />
          <TouchableOpacity
            onPress={confirmCode}
            style={{
              width: '100%',
              height: hp(6),
              backgroundColor: 'green',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#fff' }}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
