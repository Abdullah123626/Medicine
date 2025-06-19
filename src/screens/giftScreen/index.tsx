import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../enums/styleGuide';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const data = [
  {id: '1', amount: '$10', icon: require('../../assets/icons/dollar.png')},
  {id: '2', amount: '$20', icon: require('../../assets/icons/dollar.png')},
  {id: '3', amount: '$30', icon: require('../../assets/icons/dollar.png')},
  {id: '4', amount: '$40', icon: require('../../assets/icons/dollar.png')},
];

export default function NotificationScreen() {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    const isSelected = selectedId === item.id;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('paymentMethod', {selectedAmount: item.amount});
        }}
        style={{
          width: wp(33),
          height: hp(17),
          backgroundColor: '#FFFFFF', // Always white
          alignSelf: 'center',
          borderRadius: 10,
          marginTop: hp(4),
          marginHorizontal: wp(2),
          borderWidth: 2,
          borderColor: isSelected ? '#B913CD' : 'transparent', 
          
          
          // Border highlight
          

          // Shadow
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 18,
        }}>
        <View
          style={{
            width: wp(15),
            height: hp(7),
            backgroundColor: isSelected ? '#B913CD' : 'black', // Inner circle color
            borderRadius: 45,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: hp(3),
          }}>
          <Image
            source={item.icon}
            style={{
              width: wp(6.2),
              height: hp(3.5),
              alignSelf: 'center',


              
            }}
          />
        </View>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: wp(2.5),
            fontSize: wp(4.4),
            fontWeight: '600',
            color: isSelected ? '#B913CD' : 'black', // text color change on select
          }}>
          {item.amount}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1,}}>
      {/* Top Header */}
      <View
        style={{
         
          width: wp(100),
          height: hp(14),
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: hp(9),
          }}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image
              source={require('../../assets/icons/gollback.png')}
              style={{width: wp(12), height: hp(5.5)}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '700',
              marginTop: wp(4),
              marginRight: hp(6),
            }}>
            Gift
          </Text>
          <View />
        </View>
      </View>

      <Text
        style={{
          fontSize: wp(4.32),
          fontWeight: '600',
          alignSelf: 'center',
          marginTop: hp(4),
        }}>
        Choose amount you want to denote
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: hp(2), // Space before button
          paddingHorizontal: wp(8),
        }}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
          paddingHorizontal: wp(6),
        }}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={{
          width: wp(70),
          height: hp(10),
          alignSelf: 'center',
          
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 7,
        
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 18,
          marginBottom:8
        }}>
        <Image
          source={require('../../assets/icons/pen.png')}
          style={{width: wp(7), height: hp(3), marginTop: wp(7)}}
        />
        <Text style={{fontSize: wp(4), fontWeight: '600', marginTop: wp(7.5)}}>
          Custom Acount
        </Text>
      </TouchableOpacity>

      {/* FlatList ke neeche button */}
      <LinearGradient
        colors={['#E41BD8', '#9D0DC5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          width: wp(70),
          height: hp(7.5),
          borderRadius: 10,
          alignSelf: 'center',
          marginBottom: hp(3),
          marginTop: wp(11),
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            // your onPress logic for Gift Now button
          }}>
          <Text
            style={{color: '#FFFFFF', fontSize: wp(4.2), fontWeight: '600'}}>
            Gift Now
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
