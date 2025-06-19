import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function groupChatRequest({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header Over Map */}
      <View
        style={{
          width: wp(90),
          height: hp(8),
          top: hp(2.5),
          left: wp(4),
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/gollback.png')}
              style={{width: wp(8.5), height: hp(4)}}
            />
          </TouchableOpacity>

          <Text
            style={{fontSize: wp(4), fontWeight: '700', marginTop: wp(1.5)}}>
            Group Chat
          </Text>
          <View></View>
        </View>
      </View>

      {/* MapView */}
      <View
        style={{
          position: 'absolute',
          top: hp(0),
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
        }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1, marginTop: hp(11)}}
          region={{
            latitude: 28.421226901206584,
            longitude: 70.2974077627825,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />

        {/* Location Icon with 3 Contact Icons */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            position: 'absolute',
            top: '20%',
            left: '38%',
            width: wp(25),
            height: wp(25),
            borderRadius: wp(12.5),
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 6,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}>
          <LinearGradient
            colors={['#E41BD8', '#9D0DC5']}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: wp(12.5),
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            {/* Center Location Icon */}
            <Image
              source={require('../../assets/icons/locationns.png')}
              style={{width: wp(6), height: wp(6), tintColor: '#fff'}}
            />

            {/* Top Left Contact Icon */}
            <Image
              source={require('../../assets/icons/2contact.png')}
              style={{
                position: 'absolute',
                top: wp(10),
                left: wp(3),
                width: wp(4.5),
                height: wp(4.5),
                tintColor: 'black',
              }}
            />

            {/* Top Right Contact Icon */}
            <Image
              source={require('../../assets/icons/2contact.png')}
              style={{
                position: 'absolute',
                top: wp(6),
                right: wp(3),
                width: wp(4.5),
                height: wp(4.5),
                tintColor: 'black',
              }}
            />

            {/* Bottom Center Contact Icon */}
            <Image


              source={require('../../assets/icons/2contact.png')}
              style={{
                position: 'absolute',
                bottom: wp(3),
                alignSelf: 'center',
                width: wp(4.5),
                height: wp(4.5),
                tintColor: 'black',
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Group Card Floating on Map */}
      <View
        style={{
          position: 'absolute',
          bottom: hp(0),
          alignSelf: 'center',
          width: wp(100),
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          paddingVertical: wp(4),
          paddingHorizontal: wp(4),
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 4,
          zIndex: 3,
          height: hp(55),
          borderTopStartRadius: wp(12),
          borderTopRightRadius: wp(12),
        }}>
        <View
          style={{
            width: wp(74),
            height: hp(6),
            alignSelf: 'center',
            marginTop: wp(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: wp(4.5), fontWeight: '700'}}>3 Requests</Text>
          <TouchableOpacity>
            <Text style={{fontSize: wp(4)}}>Accept All</Text>
          </TouchableOpacity>
        </View>

        {/* 1st Request */}
        <View
          style={{
            width: wp(80),
            height: hp(10),
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-around',
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 9}}>
            <Image
              source={require('../../assets/images/firsttimage.png')}
              style={{width: wp(12), height: hp(6.5), borderRadius: 10}}
            />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '700',
                marginTop: wp(3.5),
              }}>
              Ebrahim H
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 9}}>
            <TouchableOpacity
              style={{
                width: wp(13),
                height: hp(6.5),
                backgroundColor: 'purple',
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/plluuss.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/delete.png')}
                style={{
                  width: wp(6),
                  height: hp(3.5),
                  marginTop: wp(2.5),
                  marginLeft: wp(2),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* 2nd Request */}
        <View
          style={{
            width: wp(80),
            height: hp(10),
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginTop: wp(6),
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 9}}>
            <Image
              source={require('../../assets/images/2nd.png')}
              style={{width: wp(12), height: hp(6.5), borderRadius: 10}}
            />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '700',
                marginTop: wp(3.5),
              }}>
              Nor Islam
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 9}}>
            <TouchableOpacity
              style={{
                width: wp(13),
                height: hp(6.5),
                backgroundColor: 'purple',
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/plluuss.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/delete.png')}
                style={{
                  width: wp(6),
                  height: hp(3.5),
                  marginTop: wp(2.5),
                  marginLeft: wp(2),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* 3rd Request */}
        <View
          style={{
            width: wp(80),
            height: hp(9),
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginTop: wp(6),
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 9}}>
            <Image
              source={require('../../assets/images/3rd.png')}
              style={{width: wp(12), height: hp(6.5), borderRadius: 10}}
            />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '700',
                marginTop: wp(3.5),
              }}>
              Abu Hanif
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 9}}>
            <TouchableOpacity
              style={{
                width: wp(13),
                height: hp(6.5),
                backgroundColor: 'purple',
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/plluuss.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/delete.png')}
                style={{
                  width: wp(6),
                  height: hp(3.5),
                  marginTop: wp(2.5),
                  marginLeft: wp(2),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Chat Request Button */}
        <LinearGradient
          colors={['#E41BD8', '#9D0DC5']}
          style={{
            width: wp(80),
            height: hp(7),
            alignSelf: 'center',
            marginTop: wp(6),
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('GroupChat')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/icons/aero.png')}
              style={{width: wp(7), height: hp(3)}}
            />
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
              Chat Request Accepted
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
