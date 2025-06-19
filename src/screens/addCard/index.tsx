import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';

export default function addCard(props: any) {
  const {navigation} = props;

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: hp(5)}}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#fff'}}>

      <View style={{flex: 1}}>
        {/* Your existing code starts here */}
        
        <View
          style={{
            width: wp(100),
            height: hp(12),
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
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
                fontSize: wp(4.5),
                fontWeight: '700',
                marginTop: wp(2.5),
                marginRight: hp(6),
              }}>
              Add Card
            </Text>
            <View />
          </View>
        </View>

        <Image
          source={require('../../assets/images/purpledollar.png')}
          style={{
            width: wp(80),
            height: hp(30),
            alignSelf: 'center',
            marginTop: wp(5),
          }}
        />

        {/* ...rest of your inputs and button untouched */}
        {/* Name on Card input */}
        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(7.5),
            alignSelf: 'center',
            marginTop: wp(12),
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
              source={require('../../assets/icons/lines.png')}
              style={{
                width: wp(5),
                height: hp(3),
                alignSelf: 'center',
                marginTop: wp(2.9),
              }}
            />
          </View>

          <TextInput placeholder="Name on Card" style={{marginLeft: wp(2.3)}} />
        </TouchableOpacity>

        {/* Repeat for Card #, Expiration, etc. */}

        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(7.5),
            alignSelf: 'center',
            marginTop: wp(5),
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
              source={require('../../assets/icons/solarcard.png')}
              style={{
                width: wp(5.9),
                height: hp(3),
                alignSelf: 'center',
                marginTop: wp(2.9),
              }}
            />
          </View>

          <TextInput placeholder="Card #" style={{marginLeft: wp(2.3)}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(7.5),
            alignSelf: 'center',
            marginTop: wp(5),
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
              source={require('../../assets/icons/calender.png')}
              style={{
                width: wp(5),
                height: hp(3),
                alignSelf: 'center',
                marginTop: wp(2.9),
              }}
            />
          </View>

          <TextInput
            placeholder="Expiration Date"
            style={{marginLeft: wp(2.3)}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: wp(80),
            height: hp(7.5),
            alignSelf: 'center',
            marginTop: wp(5),
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
              source={require('../../assets/icons/lines.png')}
              style={{
                width: wp(5),
                height: hp(3),
                alignSelf: 'center',
                marginTop: wp(2.9),
              }}
            />
          </View>

          <TextInput
            placeholder="Expiration Date"
            style={{marginLeft: wp(2.3)}}
          />
        </TouchableOpacity>

        <LinearGradient
          colors={['#E41BD8', '#9D0DC5']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            width: wp(80),
            height: hp(7.5),
            borderRadius: 9,
            alignSelf: 'center',
            marginBottom: hp(3),
            marginTop: wp(9),
          }}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("paymentDone")}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
           >
            <Text
              style={{color: '#FFFFFF', fontSize: wp(4.5), fontWeight: '600'}}>
              Make Payment
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}
