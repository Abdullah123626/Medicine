import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function peopleRequesting({navigation, route}) {
  const [timeLeft, setTimeLeft] = useState('');
  const prayerTime = route?.params?.prayerTime || '16:00'; // default 4:00 PM

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const [hours, minutes] = prayerTime.split(':').map(Number);

      const target = new Date();
      target.setHours(hours);
      target.setMinutes(minutes);
      target.setSeconds(0);

      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft('00:00');
        clearInterval(interval);
        return;
      }

      const remainingHours = Math.floor(diff / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((diff / (1000 * 60)) % 60);
      const remainingSeconds = Math.floor((diff / 1000) % 60);

      const format = (val) => (val < 10 ? `0${val}` : val);

      if (remainingHours > 0) {
        setTimeLeft(`${format(remainingHours)}:${format(remainingMinutes)}:${format(remainingSeconds)}`);
      } else {
        setTimeLeft(`${format(remainingMinutes)}:${format(remainingSeconds)}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [prayerTime]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header Over Map */}
      <View
        style={{
          position: 'absolute',
          top: hp(3),
          left: wp(4),
          zIndex: 5,
          backgroundColor: '#FFFFFF',
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
          style={{flex: 1}}
          region={{
            latitude: 28.421226901206584,
            longitude: 70.2974077627825,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>

      {/* Countdown Circle */}
      <TouchableOpacity
  onPress={() => console.log('Pressed')}
  style={{
    position: 'absolute',
    top: '20%',
    left: '50%',
    marginLeft: -50,
    marginTop: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(153, 3, 143, 0.97)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,

    // iOS shadow - full circle glow
    shadowColor: '#E41BD8',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 40,

    // Android shadow (enhanced)
    elevation: 50,
  }}>
  <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
    {timeLeft}
  </Text>
</TouchableOpacity>
<TouchableOpacity
  onPress={() => console.log('Pressed')}
  style={{
    position: 'absolute',
    top: '20%',
    left: '50%',
    marginLeft: -50,
    marginTop: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(153, 3, 143, 0.97)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,

    // iOS shadow - full circle glow
    shadowColor: '#E41BD8',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 40,

    // Android shadow (enhanced)
    elevation: 50,
  }}>
  <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
    {timeLeft}
  </Text>
</TouchableOpacity>
<TouchableOpacity
  onPress={() => console.log('Pressed')}
  style={{
    position: 'absolute',
    top: '20%',
    left: '50%',
    marginLeft: -50,
    marginTop: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(153, 3, 143, 0.97)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,

    // iOS shadow - full circle glow
    shadowColor: '#E41BD8',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 40,

    // Android shadow (enhanced)
    elevation: 50,
  }}>
  <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
    {timeLeft}
  </Text>
</TouchableOpacity>
<TouchableOpacity
  onPress={() => console.log('Pressed')}
  style={{
    position: 'absolute',
    top: '20%',
    left: '50%',
    marginLeft: -50,
    marginTop: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(153, 3, 143, 0.97)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,

    // iOS shadow - full circle glow
    shadowColor: '#E41BD8',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 40,

    // Android shadow (enhanced)
    elevation: 50,
  }}>
  <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
    {timeLeft}
  </Text>
</TouchableOpacity>


      {/* Group Card Floating on Map */}
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
          shadowColor: '#FFFFFF',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 4,
          zIndex: 3,
          height:hp(38),
          marginTop:wp(5)
        }}>
        <Text
          style={{alignSelf: 'center', fontSize: wp(4.7), fontWeight: '800',marginTop:wp(3),color:'rgba(178, 9, 184, 0.85)'}}>
          Support Our App
        </Text>
        <View style={{alignSelf: 'center', marginTop: wp(5)}}>
          <Text style={{fontSize: wp(3.5),fontWeight:"500"}}>
            Please support our app by contributing,
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: wp(3.5),
              marginTop: wp(1.3),
              fontWeight:"500"
            }}>
            we don’t take Sadiqa, Fitra, Zakat,
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: wp(1.3),
              fontSize: wp(3.5),
              fontWeight:"500"
            }}>
            donation charity we only take gift.
          </Text>
        </View>

        {/* Gift Button */}
        <LinearGradient
          colors={['#E41BD8', '#9D0DC5']}
          style={{
            width: wp(75),
            height: hp(6.5),
            alignSelf: 'center',
            borderRadius: 12,
            justifyContent: 'center',
            marginTop: wp(8),
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              borderRadius: 13,
              justifyContent: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('giftScreen')}>
            <Text
              style={{
                color: 'white',
                fontSize: wp(3.7),
                fontWeight: '600',
                alignSelf: 'center',
                
              }}>
              Gift
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Skip Button */}
        <TouchableOpacity
          style={{
            width: wp(75),
            height: hp(6.5),
            alignSelf: 'center',
            marginTop: wp(4),
            borderRadius: 12,
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: wp(3.7),
              marginTop: wp(0),
              alignSelf: 'center',
              fontWeight:"600"
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
