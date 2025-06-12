import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView, // ✅ Added
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HEIGHT, hp, wp} from '../../enums/styleGuide';

export default function loginScreen(props: any) {
  const {navigation} = props;

  return (
    <LinearGradient
      colors={['#E41BD8', '#9D0DC5']}
      style={{flex: 1}}>

      {/* ✅ ScrollView starts here */}
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>

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
            height: hp(90),
            backgroundColor: '#FFFFFF',
            marginTop: hp(3),
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>

          <Text
            style={{
              alignSelf: 'center',
              fontWeight: '600',
              fontSize: wp(5),
              marginTop: hp(3),
            }}>
            Get Back To Account
          </Text>

          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(3),
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
                width: 45,
                height: 47,
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
                  marginTop: wp(2.9),
                }}
              />
            </View>

            <TextInput
              placeholder="abc@gmail.com"
              style={{marginLeft: wp(2.3)}}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '400',
              marginTop: hp(2),
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

          <TouchableOpacity>
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                marginTop: wp(3),
                marginLeft: wp(58),
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          {/* Login Button with Gradient */}
          <TouchableOpacity
            onPress={() => navigation.navigate('signUp')}
            style={{
              width: wp(85),
              height: hp(7.5),
              alignSelf: 'center',
              marginTop: hp(2.5),
              borderRadius: 12,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 25,
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

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp(4),
            }}>
            <Text style={{fontSize: wp(4)}}>Are you a new member?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
              <Text
                style={{
                  fontSize: wp(4),
                  marginLeft: wp(1),
                  color: '#9D0DC5',
                  fontWeight: '500',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: wp(6),
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                width: wp(25),
              }}
            />
            <Text style={{fontSize: wp(4), marginHorizontal: 10}}>
              Or Continue with
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                width: wp(25),
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: wp(6),
              gap: wp(5),
            }}>
            <Image
              source={require('../../assets/icons/google.png')}
              style={{
                width: wp(12),
                height: hp(6),
                marginTop: wp(1),
              }}
            />

            <Image
              source={require('../../assets/icons/apple.png')}
              style={{
                width: wp(10),
                height: hp(6),
                marginTop: wp(1),
              }}
            />
          </View>
        </View>
      </ScrollView>
      {/* ✅ ScrollView ends here */}

    </LinearGradient>
  );
}
