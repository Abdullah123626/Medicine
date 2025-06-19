import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
interface PropType{
  title?:string,
  backIcon?:any,
  notifyIcon?:any,
  onpresBack?:()=>void,
  onpresNotify?:()=>void,
  style?:any

}

export default function Header(props:PropType) {
  const{title,backIcon,notifyIcon,onpresBack,onpresNotify,style}=props
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 20,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
      }}>
        <TouchableOpacity onPress={onpresBack}>
        <Image
          source={backIcon}
          style={{width: 32, height: 32


          }}></Image>
          </TouchableOpacity>
        <Text>{title}</Text>
        <TouchableOpacity onPress={onpresNotify}>
        <Image
          source={notifyIcon}
          style={{width: 20, height: 20}}></Image>
          </TouchableOpacity>
      </View>
    
  );
}
