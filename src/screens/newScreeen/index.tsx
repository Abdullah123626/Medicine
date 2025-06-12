import React, {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../enums/styleGuide';

export default function PasswordInput() {
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: wp(2),
        paddingHorizontal: wp(2),
        margin: wp(4),
      }}>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry={secure}
        style={{
          flex: 1,
          paddingVertical: hp(1.5),
          fontSize: wp(4),
        }}
      />
      <TouchableOpacity onPress={() => setSecure(!secure)}>
        <Image
          source={require('../../assets/images/eye.png')} // Use one icon safely
          style={{
            width: wp(6),
            height: hp(3),
            marginRight: wp(2),
            marginTop: wp(0.5),
            tintColor: secure ? '#999' : '#000', // Visual feedback
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
