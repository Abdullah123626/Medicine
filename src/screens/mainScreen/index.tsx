import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { hp, wp } from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';
import { useIsFocused } from '@react-navigation/native';

export default function mainScreen({ navigation }) {
  const isFocused = useIsFocused();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Mosque Image at Top */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}>
        <Image
          source={require('../../assets/images/mosque.png')}
          style={{
            width: wp(100),
            height: hp(29),
            resizeMode: 'cover',
          }}
        />

        {/* Prayer Info on Image */}
        <View
          style={{
            position: 'absolute',
            top: hp(4),
            width: wp(100),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(9),
          }}>
          <View>
            <Text style={{ color: '#FFFFFF', fontSize: wp(3.9), fontWeight: '400' }}>
              Next Prayer
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: wp(6.6), fontWeight: 'bold' }}>
              Asar
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#FFFFFF', fontSize: wp(3.9), fontWeight: '400' }}>
              Starts
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: wp(6.6), fontWeight: 'bold' }}>
              03:33 PM
            </Text>
          </View>
        </View>
      </View>

      {/* MapView Area */}
      <View
        style={{
          position: 'absolute',
          top: hp(15),
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
        }}>
        {isFocused && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            region={{
              latitude: 28.421226901206584,
              longitude: 70.2974077627825,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        )}

        {/* 📍 Location Icon */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: hp(38),
            alignSelf: 'center',
            backgroundColor: '#9D0DC5',
            width: wp(12),
            height: wp(12),
            borderRadius: wp(6),
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5,
          }}
          onPress={() => alert('Location icon pressed')}>
          <Image
            source={require('../../assets/icons/locationns.png')}
            style={{ width: wp(6), height: wp(6), tintColor: 'white' }}
          />
        </TouchableOpacity>

        {/* Round Button */}
        <TouchableOpacity
          onPress={() => alert('Map button pressed')}
          style={{
            position: 'absolute',
            top: hp(12),
            left: wp(35),
            width: wp(22),
            height: wp(22),
            borderRadius: wp(12.5),
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 60,
            backgroundColor: 'rgba(213, 2, 255, 0.99)',
            borderWidth: 30,
            borderColor: 'rgba(100, 30, 97, 0.25)',
          }}>
          <LinearGradient
            colors={['#E41BD8', '#9D0DC5']}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: wp(11.5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* Optional inner icon/text */}
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Floating Group Card */}
      <View
        style={{
          position: 'absolute',
          bottom: hp(3),
          alignSelf: 'center',
          width: wp(90),
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: 15,
          paddingVertical: wp(4),
          paddingHorizontal: wp(4),
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          zIndex: 3,
        }}>
        {/* Location Info */}
        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(11),
            alignSelf: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: 13,
            justifyContent: 'center',
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Image
              source={require('../../assets/icons/setlocation.png')}
              style={{ width: wp(11), height: hp(6) }}
            />
            <View
              style={{
                marginTop: wp(1.7),
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                padding: wp(2),
                borderRadius: 8,
              }}>
              <Text style={{ fontSize: wp(3.5), fontWeight: '600' }}>
                794 Prestan Street 3, London
              </Text>
              <Text style={{ fontSize: wp(3.5), alignSelf: 'center' }}>
                Praying zuhr in 29 minutes
              </Text>
            </View>
            <Image
              source={require('../../assets/icons/pen.png')}
              style={{ width: wp(7), height: hp(3.2), marginTop: wp(1.7) }}
            />
          </View>
        </TouchableOpacity>

        {/* Gradient Button */}
        <LinearGradient
          colors={['#E41BD8', '#9D0DC5']}
          style={{
            width: wp(80),
            height: hp(7),
            alignSelf: 'center',
            borderRadius: 12,
            marginTop: wp(4),
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
            }}
            onPress={() => navigation.navigate('peopleRequesting')}>
            <View style={{ flexDirection: 'row', gap: 3 }}>
              <Image
                source={require('../../assets/icons/aero.png')}
                style={{ width: wp(7), height: hp(4) }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: wp(4.2),
                  marginTop: wp(1.5),
                  fontWeight: '600',
                }}>
                Tell People To Join Jamaat
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
