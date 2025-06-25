import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useIsFocused} from '@react-navigation/native';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function groupChatRequest({navigation}) {
  const isFocused = useIsFocused(); // ✅ Add this line

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
        {isFocused && ( // ✅ Only show map if screen is focused
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
        )}

        {/* Location with Contacts */}
            <TouchableOpacity
                   activeOpacity={0.9}
                   style={{
                     position: 'absolute',
                     top: '14%',
                     left: '28%',
                     width: wp(48),
                     height: wp(48),
                     borderRadius: wp(23),
                     backgroundColor: 'rgba(230, 103, 230, 0.18)',
                     justifyContent: 'center',
                     alignItems: 'center',
                     shadowColor: '#000',
                     shadowOffset: {width: 0, height: 1},
                     shadowOpacity: 0.05,
                     shadowRadius: 2,
                     elevation: 1,
                   }}>
                   <View
                     style={{
                       width: '100%',
                       height: '100%',
                       borderRadius: wp(29),
                       justifyContent: 'center',
                       alignItems: 'center',
                       position: 'relative',
                     }}>
                     {/* Purple Circle Behind Location Icon */}
                     <LinearGradient
                       colors={['#E41BD8', '#9D0DC5']}
                       style={{
                         width: wp(14),
                         height: wp(14),
                         borderRadius: wp(9),
                         justifyContent: 'center',
                         alignItems: 'center',
                         zIndex: 2,
                       }}>
                         <TouchableOpacity>
                       <Image
                         source={require('../../assets/icons/locationns.png')}
                         style={{width: wp(10), height: wp(10), tintColor: 'white'}}
                       />
                       </TouchableOpacity>
                     </LinearGradient>
         
                     {/* Contact Icons */}
                     <Image
                       source={require('../../assets/icons/singlecontact.png')}
                       style={{
                         position: 'absolute',
                         top: wp(6),
                         left: wp(12),
                         width: wp(9.5),
                         height: wp(7.5),
                         tintColor: 'black',
                       }}
                     />
                     <Image
                       source={require('../../assets/icons/singlecontact.png')}
                       style={{
                         position: 'absolute',
                         top: wp(15),
                         right: wp(2),
                         width: wp(9.5),
                         height: wp(7.5),
                         tintColor: 'black',
                       }}
                     />
                     <Image
                       source={require('../../assets/icons/singlecontact.png')}
                       style={{
                         position: 'absolute',
                         bottom: wp(5),
                         alignSelf: 'center',
                         width: wp(9.5),
                         height: wp(7.5),
                         tintColor: 'black',
                       }}
                     />
                   </View>
                 </TouchableOpacity>
               </View>
      {/* Bottom Group Card */}
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
        {/* Header */}
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

        {/* 3 Requests (Same Code) */}
        {[1, 2, 3].map((_, index) => {
          const names = ['Ebrahim H', 'Nor Islam', 'Abu Hanif'];
          const images = [
            require('../../assets/images/firsttimage.png'),
            require('../../assets/images/2nd.png'),
            require('../../assets/images/3rd.png'),
          ];
          return (
            <View
              key={index}
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
                marginTop: index === 0 ? wp(3) : wp(6),
              }}>
              <View style={{flexDirection: 'row', alignSelf: 'center', gap: 9}}>
                <Image
                  source={images[index]}
                  style={{width: wp(12), height: hp(6.5), borderRadius: 10}}
                />
                <Text
                  style={{
                    fontSize: wp(4),
                    fontWeight: '700',
                    marginTop: wp(3.5),
                  }}>
                  {names[index]}
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
          );
        })}

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
