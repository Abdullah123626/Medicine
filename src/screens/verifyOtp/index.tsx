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
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, paddingHorizontal: wp(3)}}>
        <Image
          source={require('../../assets/images/otp.png')}
          style={{
            width: wp(80),
            height: hp(40),
            alignSelf: 'center',
            marginTop: hp(8),
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
            alignSelf: 'center',
            fontSize: wp(4),
            fontWeight: '600',
            marginTop: wp(1),
          }}>
          muhammadsal2@gmail.com
        </Text>

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
              style={{
                width: wp(12),
                height: wp(15),
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: wp(2),
                textAlign: 'center',
                fontSize: wp(5),
                fontWeight: '600',
              }}
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            width: wp(85),
            height: hp(8),
            alignSelf: 'center',
            borderRadius: 12,
            backgroundColor: '#9D0DC5',
            marginTop: hp(13),
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
                  marginTop:wp(3)
                }}>
                Set New Password
              </Text>
              
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
                          height: hp(8),
                          alignSelf: 'center',
                          marginTop: wp(4),
                          borderWidth: 0.5,
                          flexDirection: 'row',
                          borderRadius: 8,
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
              
                      <TouchableOpacity></TouchableOpacity>



                        <Text
                        style={{
                          fontSize: wp(4),
                          fontWeight: '400',
                          marginTop: hp(5),
                          marginLeft: wp(4),
                        }}>
                       Confirm Password
                      </Text>
              
                      <TouchableOpacity
                        style={{
                          width: wp(70),
                          height: hp(8),
                          alignSelf: 'center',
                          marginTop: wp(4),
                          borderWidth: 0.5,
                          flexDirection: 'row',
                          borderRadius: 8,
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
              
                      <TouchableOpacity></TouchableOpacity>


                      



              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('newScreen');
                }}
                style={{
                  
                  
                  borderRadius: 10,
                  marginTop:wp(10),
                  width:wp(75),
                  height:hp(8),
                  justifyContent: 'center',
                }}>

                   <LinearGradient
                              colors={['#E41BD8', '#9D0DC5']}
                              style={{
                                flex: 1,
                                justifyContent: 'center',
                                borderRadius: 12,
                              }}>
                <Text style={{color: '#fff', fontWeight: '600', fontSize: wp(4),alignSelf:"center"}}>
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
