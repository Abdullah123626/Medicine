import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { hp, wp } from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function paymentMethod(props) {
  const { navigation } = props;
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleContinue = () => {
    if (selectedMethod) {
      navigation.navigate('addCard'); // ✅ Replace with your actual screen name
    } else {
      Alert.alert('Select Payment Method', 'Please choose PayPal or Card to continue.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          width: wp(100),
          height: hp(12),
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: hp(9),
            width: wp(90),
            alignSelf: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/gollback.png')}
              style={{ width: wp(10.8), height: hp(5) }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '500',
              marginTop: wp(4),
              marginRight: hp(6),
            }}>
            Payment Method
          </Text>
          <View />
        </View>
      </View>

      {/* Paypal Option */}
      <TouchableOpacity
        onPress={() => setSelectedMethod('paypal')}
        activeOpacity={0.8}
        style={{
          width: wp(80),
          height: hp(12.5),
          alignSelf: 'center',
          marginTop: wp(9),
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 25,
        }}>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: wp(70),
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/icons/P.png')}
              style={{ width: wp(12), height: hp(5) }}
            />
            <Text
              style={{ marginLeft: wp(3), fontSize: wp(3.7), fontWeight: '600' }}>
              PayPal
            </Text>
          </View>

          {/* Selection Circle */}
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 50,
              borderWidth: selectedMethod === 'paypal' ? 0 : 1,
              borderColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            {selectedMethod === 'paypal' && (
              <LinearGradient
                colors={['#E41BD8', '#9D0DC5']}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                  position: 'absolute',
                }}
              />
            )}
            {selectedMethod === 'paypal' && (
              <LinearGradient
                colors={['#E41BD8', '#9D0DC5']}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                }}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {/* Card Option */}
      <TouchableOpacity
        onPress={() => setSelectedMethod('card')}
        activeOpacity={0.8}
        style={{
          width: wp(80),
          height: hp(12.5),
          alignSelf: 'center',
          marginTop: wp(5),
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 25,
        }}>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: wp(70),
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/icons/Visa.png')}
              style={{ width: wp(12), height: hp(6) }}
            />
            <Text
              style={{ marginLeft: wp(3), fontSize: wp(3.7), fontWeight: '600' }}>
              Credit/Debit Card
            </Text>
          </View>

          {/* Selection Circle */}
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 50,
              borderWidth: selectedMethod === 'card' ? 0 : 1,
              borderColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            {selectedMethod === 'card' && (
              <LinearGradient
                colors={['#E41BD8', '#9D0DC5']}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                  position: 'absolute',
                }}
              />
            )}
            {selectedMethod === 'card' && (
              <LinearGradient
                colors={['#E41BD8', '#9D0DC5']}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                }}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity onPress={handleContinue}>
        <LinearGradient
          colors={['#E41BD8', '#9D0DC5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: wp(75),
            height: hp(7),
            alignSelf: 'center',
            marginTop: hp(38),
            borderRadius: hp(1),
            justifyContent: 'center',
            alignItems: 'center',
            opacity: selectedMethod ? 1 : 0.5,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp(4.5),
            }}>
            Continue
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
