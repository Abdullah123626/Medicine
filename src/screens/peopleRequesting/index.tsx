import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function peopleRequesting({navigation, route}) {
  const {selectedPrayer, selectedTime} = route.params || {};
  const [timeLeft, setTimeLeft] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getTargetDate = () => {
      if (!selectedTime) return new Date();

      const [time, period] = selectedTime.split(' ');
      const [hourStr, minuteStr] = time.split(':');
      let hour = parseInt(hourStr);
      const minute = parseInt(minuteStr);

      if (period === 'PM' && hour !== 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;

      const now = new Date();
      const target = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        minute,
        0,
        0,
      );
      return target;
    };

    const targetTime = getTargetDate();

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft('00:00');
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const formatted =
        (hours > 0 ? `${hours}:` : '') +
        `${minutes < 10 ? '0' : ''}${minutes}:` +
        `${seconds < 10 ? '0' : ''}${seconds}`;

      setTimeLeft(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedTime]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Back Button */}
      <View
        style={{
          position: 'absolute',
          top: hp(3),
          left: wp(4),
          zIndex: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 100,
          padding: wp(2),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/gollback.png')}
            style={{width: wp(7), height: hp(3.3)}}
          />
        </TouchableOpacity>
      </View>

      {/* Map */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
        }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          region={{
            latitude: 28.421226901206584,
            longitude: 70.2974077627825,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />

        {/* Countdown Timer */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '7%',
            left: '50%',
            transform: [{translateX: -wp(15)}],
            width: wp(30),
            height: wp(30),
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 10,
          }}>
          <LinearGradient
            colors={['#E41BD8', '#9D0DC5']}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: wp(20),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: wp(4)}}>
              {timeLeft}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Location Icon with 3 Black Contacts */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            position: 'absolute',
            top: '38%',
            left: '28%',
            width: wp(48),
            height: wp(48),
            borderRadius: wp(23),
            backgroundColor: 'rgba(241, 228, 241, 0.18)', // lighter background
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}>
          <LinearGradient
            colors={['rgba(228, 27, 216, 0.15)', 'rgba(157, 13, 197, 0.1)']}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: wp(29),
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Image
              source={require('../../assets/icons/locationns.png')}
              style={{width: wp(10), height: wp(10), tintColor: 'rgb(198, 9, 255)'}}
            />
            <Image
              source={require('../../assets/icons/2contact.png')}
              style={{
                position: 'absolute',
                top: wp(6),
                left: wp(12),
                width: wp(6.5),
                height: wp(6.5),
                tintColor: 'black',
              }}
            />
            <Image
              source={require('../../assets/icons/2contact.png')}
              style={{
                position: 'absolute',
                top: wp(15),
                right: wp(2),
                width: wp(6.5),
                height: wp(6.5),
                tintColor: 'black',
              }}
            />
            <Image
              source={require('../../assets/icons/2contact.png')}
              style={{
                position: 'absolute',
                bottom: wp(5),
                alignSelf: 'center',
                width: wp(6.5),
                height: wp(6.5),
                tintColor: 'black',
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Bottom Card */}
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
          zIndex: 3,
        }}>
        <LinearGradient
          colors={['#E41BD8', '#9D0DC5']}
          style={{
            width: wp(80),
            height: hp(7),
            alignSelf: 'center',
            borderRadius: 13,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{flex: 1, borderRadius: 13, justifyContent: 'center'}}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('groupChatRequest')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 6,
              }}>
              <Image
                source={require('../../assets/icons/2contact.png')}
                style={{width: wp(7), height: hp(2.5)}}
              />
              <Text
                style={{color: 'white', fontSize: wp(4.2), fontWeight: '600'}}>
                3 People Requesting Group Chat
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>

        {/* Cancel Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            width: wp(80),
            height: hp(7),
            alignSelf: 'center',
            marginTop: wp(7),
            borderRadius: 13,
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 5}}>
            <Image
              source={require('../../assets/icons/gollcross.png')}
              style={{width: wp(5), height: hp(2.5)}}
            />
            <Text style={{fontSize: wp(4)}}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Cancel Confirmation Modal */}
      {modalVisible && (
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: wp(85),
                backgroundColor: 'white',
                borderRadius: 25,
                padding: wp(5),
                alignItems: 'center',
              }}>
              <View>
                <Image
                  source={require('../../assets/images/chandpurple.png')}
                  style={{width: wp(55), height: wp(55), marginLeft: wp(15)}}
                />
              </View>
              <Text style={{fontSize: wp(5), fontWeight: '700'}}>
                Are You Sure
              </Text>
              <View style={{marginTop: wp(3)}}>
                <Text>You need to cancel Jamat to</Text>
                <Text style={{alignSelf: 'center', marginTop: wp(1.5)}}>
                  connect to other
                </Text>
              </View>

              {/* OK Button with Gradient */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{marginTop: wp(7), alignSelf: 'center'}}>
                <LinearGradient
                  colors={['#E41BD8', '#9D0DC5']}
                  style={{
                    width: wp(60),
                    height: hp(6),
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: wp(4.5),
                      fontWeight: '700',
                    }}>
                    ok
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* Back Button */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  width: wp(60),
                  height: hp(6),
                  alignSelf: 'center',
                  borderRadius: 12,
                  justifyContent: 'center',
                  marginTop: wp(5),
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: wp(4),
                    fontWeight: '700',
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
