import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native'; // 👈 added this

export default function homeScreen({navigation}) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedPrayer, setSelectedPrayer] = useState('Praying Fajr');
  const [selectedTime, setSelectedTime] = useState('04:00 AM');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const isFocused = useIsFocused(); // 👈 added this

  const toggleDropdown = type => {
    setActiveDropdown(prev => (prev === type ? null : type));
  };

  const isValidPrayerTime = (prayer, time) => {
    const timeMap = {
      'Praying Fajr': ['04:00 AM', '04:15 AM', '04:30 AM'],
      'Praying Zuhr': ['12:30 PM', '01:00 PM', '01:30 PM'],
      'Praying Asr': ['03:30 PM', '04:00 PM', '04:30 PM'],
      'Praying Maghrib': ['06:30 PM', '07:00 PM'],
      'Praying Isha': ['08:00 PM', '08:30 PM'],
    };
    return timeMap[prayer]?.includes(time);
  };

  const handleSelect = () => {
    if (isValidPrayerTime(selectedPrayer, selectedTime)) {
      navigation.navigate('mainScreen');
    } else {
      setShowErrorModal(true);
    }
  };

  const renderItem = (text, icon, selectedItem, setSelectedItem) => {
    const isSelected = selectedItem === text;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(text);
          setActiveDropdown(null);
        }}
        style={styles.dropdownItemWrapper}>
        {isSelected ? (
          <LinearGradient
            colors={['#E41BD8', '#9D0DC5']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientBox}>
            <View style={styles.row}>
              <Image source={icon} style={styles.dropdownIcon} />
              <Text style={[styles.dropdownItemText, {color: '#fff'}]}>
                {text}
              </Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={styles.row}>
            <Image source={icon} style={styles.dropdownIcon} />
            <Text style={[styles.dropdownItemText, {color: '#000'}]}>
              {text}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Mosque Background */}
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1}}>
        <Image
          source={require('../../assets/images/mosque.png')}
          style={{width: wp(100), height: hp(29), resizeMode: 'cover'}}
        />
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
            <Text style={{color: '#fff', fontSize: wp(3.9)}}>Next Prayer</Text>
            <Text style={{color: '#fff', fontSize: wp(6.6), fontWeight: 'bold'}}>Asar</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: '#fff', fontSize: wp(3.9)}}>Starts</Text>
            <Text style={{color: '#fff', fontSize: wp(6.6), fontWeight: 'bold'}}>03:33 PM</Text>
          </View>
        </View>
      </View>

      {/* MapView */}
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
            style={{flex: 1}}
            region={{
              latitude: 28.421226901206584,
              longitude: 70.2974077627825,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        )}

        {/* Round Button */}
        <TouchableOpacity
          onPress={() => alert('Map button pressed')}
          style={{
            position: 'absolute',
            top: hp(14),
            left: wp(35),
            width: wp(22),
            height: wp(22),
            borderRadius: wp(12.5),
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 60,
            backgroundColor: 'rgba(224, 7, 224, 0.18)',
            borderWidth: 28,
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

      {/* Bottom Card */}
      <View style={{
        position: 'absolute',
        bottom: hp(3),
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: wp(90),
        borderRadius: 10,
        paddingBottom: hp(2),
        elevation: 10,
        zIndex: 3,
      }}>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: hp(2), gap: 8}}>
          {/* Prayer Dropdown */}
          <View style={{position: 'relative'}}>
            {activeDropdown === 'prayer' && (
              <View style={[styles.dropdownContainer, {bottom: hp(6.5) + 6}]}>
                {['Praying Fajr', 'Praying Zuhr', 'Praying Asr', 'Praying Maghrib', 'Praying Isha'].map(item =>
                  renderItem(item, require('../../assets/icons/paksetting.png'), selectedPrayer, setSelectedPrayer)
                )}
              </View>
            )}
            <TouchableOpacity onPress={() => toggleDropdown('prayer')} style={styles.button}>
              <Image source={require('../../assets/icons/paksetting.png')} style={styles.icon} />
              <Text style={styles.btnText}>{selectedPrayer}</Text>
              <Image source={require('../../assets/icons/down.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>

          {/* Time Dropdown */}
          <View style={{position: 'relative'}}>
            {activeDropdown === 'time' && (
              <View style={[styles.dropdownContainer, {bottom: hp(6.5) + 6}]}>
                {[
                  '04:00 AM', '04:15 AM', '04:30 AM', '12:30 PM', '01:00 PM', '01:30 PM',
                  '03:30 PM', '04:00 PM', '04:30 PM', '06:30 PM', '07:00 PM', '08:00 PM', '08:30 PM',
                ].map(time =>
                  renderItem(time, require('../../assets/icons/click.png'), selectedTime, setSelectedTime)
                )}
              </View>
            )}
            <TouchableOpacity onPress={() => toggleDropdown('time')} style={styles.button}>
              <Image source={require('../../assets/icons/click.png')} style={{width: wp(5), height: hp(2.8), resizeMode: 'contain'}} />
              <Text style={styles.btnText}>{selectedTime}</Text>
              <Image source={require('../../assets/icons/down.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Select Location Button */}
        <TouchableOpacity
          onPress={handleSelect}
          style={{
            width: wp(80),
            height: hp(6),
            alignSelf: 'center',
            marginTop: wp(3),
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <LinearGradient
            colors={['#E41BD8', '#9D0DC5']}
            style={{
              flex: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 5,
            }}>
            <Image source={require('../../assets/icons/locationns.png')} style={{width: wp(5), height: hp(3)}} />
            <Text style={{color: '#FFFFFF'}}>Select Location</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Error Modal */}
      <Modal visible={showErrorModal} transparent animationType="fade">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 40,
            padding: 20,
            width: wp(85),
            alignItems: 'center',
          }}>
            <Image
              source={require('../../assets/images/chandpurple.png')}
              style={{width: wp(42), height: hp(24), alignSelf: 'center', marginLeft: wp(12)}}
            />
            <Text style={{fontSize: wp(5.5), fontWeight: '700'}}>Wrong prayer select</Text>
            <Text style={{marginTop: wp(5)}}>Please select prayer as its look like prayer</Text>
            <Text>time in your location.</Text>

            <TouchableOpacity
              onPress={() => setShowErrorModal(false)}
              style={{
                marginTop: wp(9),
                borderRadius: 12,
                width: wp(70),
                height: hp(6.5),
                overflow: 'hidden',
              }}>
              <LinearGradient
                colors={['#E41BD8', '#9D0DC5']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 12,
                }}>
                <Text style={{color: '#fff', fontSize: wp(4), fontWeight: '700'}}>Got It</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: wp(38),
    height: hp(6.5),
    borderWidth: 0.2,
    borderRadius: 8,
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    width: wp(6),
    height: hp(3),
    resizeMode: 'contain',
  },
  btnText: {
    fontSize: wp(3),
  },
  dropdownContainer: {
    position: 'absolute',
    width: wp(38),
    backgroundColor: '#fff',
    borderRadius: 6,
    zIndex: 10,
    elevation: 5,
  },
  dropdownItemWrapper: {
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
  },
  dropdownIcon: {
    width: wp(4),
    height: hp(2),
    marginRight: wp(1.5),
  },
  dropdownItemText: {
    fontSize: wp(3.2),
  },
  gradientBox: {
    borderRadius: 6,
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.8),
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
