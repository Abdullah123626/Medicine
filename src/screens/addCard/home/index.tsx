import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { hp, wp } from '../../../enums/styleGuide';

export default function Home() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUserData = async () => {
      const currentUser = auth().currentUser;

      if (currentUser) {
        try {
          const documentSnapshot = await firestore()
            .collection('users')
            .doc(currentUser.uid)
            .get();

          if (documentSnapshot.exists) {
            const data = documentSnapshot.data();
            console.log('Fetched user data:', data);
            setName(data.fullName || ''); // 👈 Use correct key
            setAddress(data.address || '');
            setEmail(data.email || '');
          } else {
            console.log('No user data found!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    const currentUser = auth().currentUser;

    if (currentUser) {
      try {
        await firestore().collection('users').doc(currentUser.uid).update({
          name: name,
          address: address,
          email: email,
        });
        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Error updating profile');
      }
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 16,
        }}>
        Welcome!
      </Text>

      {/* Name Input */}
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="fullName"
        style={{
          width: wp(80),
          height: hp(7),
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 12,
          marginTop: wp(10),
          paddingLeft: 10,
        }}
      />

      {/* Address Input */}
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={{
          width: wp(80),
          height: hp(7),
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 12,
          marginTop: wp(5),
          paddingLeft: 10,
        }}
      />

      {/* Email Input */}
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{
          width: wp(80),
          height: hp(7),
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 12,
          marginTop: wp(5),
          paddingLeft: 10,
        }}
      />

      <TouchableOpacity
        onPress={handleUpdate}
        style={{
          width: wp(80),
          height: hp(7.5),
          alignSelf: 'center',
          marginTop: hp(5),
          borderRadius: 20,
          backgroundColor: 'purple',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: '700',
            alignSelf: 'center',
            color: '#FFFFFF',
          }}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
}
