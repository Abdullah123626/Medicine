import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function VerifyOtp(props: any) {
  const {navigation} = props;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{flex: 1, paddingHorizontal: wp(3)}}>
        <Image
          source={require('../../assets/images/otp.png')}
          style={{
            width: wp(80),
            height: hp(40),
            alignSelf: 'center',
            marginTop: hp(9),
          }}
        />
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: hp(3),
          }}>
          Verify OTP
        </Text>
        <Text style={{alignSelf: 'center', marginTop: hp(2), fontSize: wp(4)}}>
          Enter the 6 digit OTP sent to your email
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            alignSelf: 'center',
            marginTop: wp(2),
          }}>
          muhammadsal2@gmail.com
        </Text>

        {/* OTP Input Boxes */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(5),
            paddingHorizontal: wp(5),
          }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={el => (inputs.current[index] = el)}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              style={{
                width: wp(12),
                height: wp(15),
                borderRadius: wp(2),
                textAlign: 'center',
                fontSize: wp(5),
                fontWeight: '600',
                backgroundColor: focusedIndex === index ? 'white' : '#eee',
                borderWidth: 1,
                borderColor: '#ccc',
                 // Always grey border
                 marginTop:wp(1.3)
              }}
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            width: wp(85),
            height: hp(7.5),
            alignSelf: 'center',
            borderRadius: 12,
            marginTop: hp(11),
            justifyContent: 'center',
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
              Verify
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                width: wp(85),
                padding: wp(5),
                backgroundColor: 'white',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontSize: wp(5),
                  fontWeight: '700',
                  marginBottom: wp(3),
                  alignSelf: 'center',
                  marginTop: wp(3),
                }}>
                Set New Password
              </Text>

              {/* Password Field */}
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '400',
                  marginTop: hp(2),
                  marginLeft: wp(4),
                }}>
                Password
              </Text>

              <TouchableOpacity
                style={{
                  width: wp(70),
                  height: hp(7.5),
                  alignSelf: 'center',
                  marginTop: wp(4),
                  borderWidth: 0.5,
                  flexDirection: 'row',
                  borderRadius: 12,
                }}>
                <View
                  style={{
                    width: 45,
                    height: 47,
                    backgroundColor: 'pink',
                    alignSelf: 'center',
                    borderRadius: 13,
                    marginLeft: wp(2),
                  }}>
                  <Image
                    source={require('../../assets/icons/lock.png')}
                    style={{
                      width: wp(4.4),
                      height: hp(2.5),
                      alignSelf: 'center',
                      marginTop: wp(3.1),
                    }}
                  />
                </View>

                <TextInput
                  placeholder="***************"
                  secureTextEntry
                  style={{marginLeft: wp(2.3), flex: 1}}
                />

                <Image
                  source={require('../../assets/images/eye.png')}
                  style={{
                    width: wp(6),
                    height: hp(3),
                    marginRight: wp(4),
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>

              {/* Confirm Password Field */}
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '400',
                  marginTop: hp(4.3),
                  marginLeft: wp(4),
                }}>
                Confirm Password
              </Text>

              <TouchableOpacity
                style={{
                  width: wp(70),
                  height: hp(7.5),
                  alignSelf: 'center',
                  marginTop: wp(4),
                  borderWidth: 0.5,
                  flexDirection: 'row',
                  borderRadius: 12,
                }}>
                <View
                  style={{
                    width: 45,
                    height: 47,
                    backgroundColor: 'pink',
                    alignSelf: 'center',
                    borderRadius: 13,
                    marginLeft: wp(2),
                  }}>
                  <Image
                    source={require('../../assets/icons/lock.png')}
                    style={{
                      width: wp(4.4),
                      height: hp(2.5),
                      alignSelf: 'center',
                      marginTop: wp(3.1),
                    }}
                  />
                </View>

                <TextInput
                  placeholder="***************"
                  secureTextEntry
                  style={{marginLeft: wp(2.3), flex: 1}}
                />

                <Image
                  source={require('../../assets/images/eye.png')}
                  style={{
                    width: wp(6),
                    height: hp(3),
                    marginRight: wp(4),
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>

              {/* Change Password Button */}
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('BottomBar');
                }}
                style={{
                  borderRadius: 12,
                  marginTop: wp(10),
                  width: wp(70),
                  height: hp(7.5),
                  justifyContent: 'center',
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
                      color: '#fff',
                      fontWeight: '600',
                      fontSize: wp(4),
                      alignSelf: 'center',
                    }}>
                    Change Password
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
