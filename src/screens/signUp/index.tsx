import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';
// ✅ CORRECTED IMPORT
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function loginScreen(props: any) {
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const { navigation } = props;

  return (
    <LinearGradient colors={['#E41BD8', '#9D0DC5']} style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/SJ.png')}
          style={{
            width: wp(32),
            height: hp(15),
            alignSelf: 'center',
            marginTop: hp(10),
          }}
        />
        <View
          style={{
            width: wp(100),
            height: hp(125),
            backgroundColor: '#FFFFFF',
            marginTop: hp(3),
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingBottom: hp(10),
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: '600',
              fontSize: wp(5),
              marginTop: hp(3),
            }}>
            Create Account
          </Text>
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(3),
              marginLeft: wp(10.5),
            }}>
            User ID
          </Text>
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(8),
              alignSelf: 'center',
              marginTop: wp(4),
              borderWidth: 0.5,
              flexDirection: 'row',
              borderRadius: 8,
            }}>
            <View
              style={{
                width: wp(11),
                height: hp(5.8),
                backgroundColor: 'pink',
                alignSelf: 'center',
                borderRadius: 13,
                marginLeft: wp(2),
              }}>
              <Image
                source={require('../../assets/icons/contact.png')}
                style={{
                  width: wp(3.8),
                  height: hp(2.5),
                  alignSelf: 'center',
                  marginTop: wp(3),
                }}
              />
            </View>

            <TextInput
              placeholder="XYZ"
              style={{ flex: 1, paddingLeft: wp(2.8) }}
            />
          </TouchableOpacity>

          {/* Full Name */}
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(2.5),
              marginLeft: wp(10.5),
            }}>
            Full Name
          </Text>
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(8),
              alignSelf: 'center',
              marginTop: wp(4),
              borderWidth: 0.5,
              flexDirection: 'row',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: wp(11),
                height: hp(5.8),
                backgroundColor: 'pink',
                alignSelf: 'center',
                borderRadius: 13,
                marginLeft: wp(2),
              }}>
              <Image
                source={require('../../assets/icons/contact.png')}
                style={{
                  width: wp(3.8),
                  height: hp(2.5),
                  alignSelf: 'center',
                  marginTop: wp(3),
                }}
              />
            </View>

            <TextInput
              placeholder="Muhammad Salman"
              secureTextEntry
              style={{ flex: 1, paddingLeft: wp(3) }}
            />
          </TouchableOpacity>

          {/* Email */}
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(2.5),
              marginLeft: wp(10.5),
            }}>
            Email Address
          </Text>
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(8),
              alignSelf: 'center',
              marginTop: wp(4),
              borderWidth: 0.5,
              flexDirection: 'row',
              borderRadius: 8,
            }}>
            <View
              style={{
                width: wp(11),
                height: hp(5.8),
                backgroundColor: 'pink',
                alignSelf: 'center',
                borderRadius: 13,
                marginLeft: wp(2),
              }}>
              <Image
                source={require('../../assets/icons/box.png')}
                style={{
                  width: wp(5),
                  height: hp(3),
                  alignSelf: 'center',
                  marginTop: wp(3),
                }}
              />
            </View>

            <TextInput
              placeholder="abc@gmail.com"
              style={{ flex: 1, paddingLeft: wp(2.8) }}
            />
          </TouchableOpacity>

          {/* Contact */}
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(2.5),
              marginLeft: wp(10.5),
            }}>
            Contact
          </Text>
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(8),
              alignSelf: 'center',
              marginTop: wp(4),
              borderWidth: 0.5,
              flexDirection: 'row',
              borderRadius: 8,
            }}>
            <View
              style={{
                width: wp(11),
                height: hp(5.8),
                backgroundColor: 'pink',
                alignSelf: 'center',
                borderRadius: 13,
                marginLeft: wp(2),
              }}>
              <Image
                source={require('../../assets/icons/phone.png')}
                style={{
                  width: wp(3.8),
                  height: hp(2.9),
                  alignSelf: 'center',
                  marginTop: wp(3),
                }}
              />
            </View>
            <Text
              style={{
                fontSize: wp(4),
                marginLeft: wp(2.5),
                marginTop: wp(5.5),
              }}>
              +46
            </Text>
            <View
              style={{
                width: 1,
                height: 45,
                backgroundColor: 'grey',
                marginTop: wp(2.5),
                marginLeft: wp(2),
              }}
            />
            <TextInput
              placeholder="Phone Number"
              style={{ flex: 1, paddingLeft: wp(2.8) }}
            />
          </TouchableOpacity>

          {/* Country */}
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(2.5),
              marginLeft: wp(10.5),
            }}>
            Country
          </Text>
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(8),
              alignSelf: 'center',
              marginTop: wp(4),
              borderWidth: 0.5,
              flexDirection: 'row',
              borderRadius: 8,
            }}>
            <View
              style={{
                width: wp(11),
                height: hp(5.8),
                backgroundColor: 'pink',
                alignSelf: 'center',
                borderRadius: 13,
                marginLeft: wp(2),
              }}>
              <Image
                source={require('../../assets/icons/globe.png')}
                style={{
                  width: wp(6.8),
                  height: hp(3),
                  alignSelf: 'center',
                  marginTop: wp(3),
                }}
              />
            </View>

            <TextInput
              placeholder="Select"
              style={{ flex: 1, paddingLeft: wp(2.8) }}
            />
            <Image
              source={require('../../assets/icons/down.png')}
              style={{
                width: wp(7),
                height: hp(2),
                marginTop: wp(6),
                marginRight: wp(2),
              }}
            />
          </TouchableOpacity>

          {/* Password */}
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(2.5),
              marginLeft: wp(10.5),
            }}>
            Password
          </Text>
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(8),
              alignSelf: 'center',
              marginTop: wp(4),
              borderWidth: 0.5,
              flexDirection: 'row',
              borderRadius: 8,
            }}>
            <View
              style={{
                width: wp(11),
                height: hp(5.8),
                backgroundColor: 'pink',
                alignSelf: 'center',
                borderRadius: 13,
                marginLeft: wp(2),
              }}>
              <Image
                source={require('../../assets/icons/lock.png')}
                style={{
                  width: wp(4.8),
                  height: hp(2.8),
                  alignSelf: 'center',
                  marginTop: wp(2.7),
                }}
              />
            </View>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="***************"
              secureTextEntry={secure}
              style={{
                flex: 1,
                paddingVertical: hp(1.5),
                fontSize: wp(4),
                marginLeft: wp(2),
              }}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Image
                source={require('../../assets/images/eye.png')}
                style={{
                  width: wp(6),
                  height: hp(3),
                  marginRight: wp(2),
                  marginTop: wp(5.5),
                  tintColor: secure ? '#999' : '#000',
                }}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Terms & Conditions */}
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp(3.3),
            }}>
            <TouchableOpacity
              onPress={() => setIsSelected(!isSelected)}
              style={{
                width: wp(4),
                height: hp(2),
                borderWidth: 1,
                marginTop: wp(1),
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: isSelected ? 'blue' : 'gray',
                backgroundColor: isSelected ? '#e0f0ff' : 'white',
              }}>
              {isSelected && (
                <Ionicons name="checkmark" size={hp(1.5)} color="blue" />
              )}
            </TouchableOpacity>
            <View style={{ width: wp(70), height: hp(8), marginLeft: wp(4) }}>
              <Text>
                I agree with{' '}
                <Text
                  style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                  Terms & Conditions
                </Text>{' '}
                and
              </Text>
              <Text>
                <Text
                  style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                  Privacy Policy
                </Text>
                .
              </Text>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('waitingScreen')}
            style={{
              width: wp(85),
              height: hp(7.5),
              alignSelf: 'center',
              marginTop: hp(1.5),
              backgroundColor: '#9D0DC5',
              borderRadius: 12,
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 18,
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
                  fontSize: wp(5.5),
                  fontWeight: '600',
                  alignSelf: 'center',
                  color: '#FFFFFF',
                }}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Footer */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(4),
              alignSelf: 'center',
            }}>
            <Text style={{ fontSize: wp(4) }}>Already have an account ?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('loginScreen')}>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '500',
                  marginLeft: wp(0.7),
                  color: '#9D0DC5',
                }}>
                {' '}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
