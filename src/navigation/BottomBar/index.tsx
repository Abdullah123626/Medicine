import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageBase} from 'react-native';
import homeScreen from '../../screens/homeScreen';
import groupChat from '../../screens/groupChat';
import notificationScreen from '../../screens/notificationScreen';
import profileScreen from '../../screens/profileScreen';
import stack from '../nestedStack';
import nestedStack from '../nestedStack';
import groupStack from '../groupStack';

const Tab = createBottomTabNavigator();

export function BottomBar() {
  return (
   <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarShowLabel: true, // Hides tab labels
    tabBarStyle: {
      height: 60, // <-- Yahan apni desired height set karein
    },
     tabBarLabelStyle: {
      fontSize: 12,
      paddingBottom: 5,
      color: 'grey', // default label color
    },
    tabBarActiveTintColor: '#E41BD8',     // 👈 Active color for icon and label
    tabBarInactiveTintColor: 'black',   // 👈 Inactive color for icon and label
    tabBarLabelStyle: {
      fontSize: 12,
      paddingBottom: 5,
    },
  
  }}
>

      <Tab.Screen
        name="Home"
        component={nestedStack}
        options={{

      tabBarIcon: ({ focused, color }) => (
            <Image
              source={require('../../assets/icons/vectorbox.png')}
              style={{
                width: 23,
                height: 23,
            tintColor: color, // uses color from active/inactive setting
              }}
            />
            
          ),
                tabBarLabel: 'Home', // 👈 Optional custom label

        }}
      />
      <Tab.Screen
        name="GroupChat"
        component={groupStack}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/icons/chatbox.png')}
              style={{
                width: 23,
                height: 23,
            tintColor: color, // uses color from active/inactive setting
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={notificationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/icons/notify.png')}
              style={{
                width: 20,
                height: 23,
            tintColor: color, // uses color from active/inactive setting
              }}
            />
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets//icons/contacct.png')}
              style={{
                width: 25,
                height: 25.2,
            tintColor: color, // uses color from active/inactive setting
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
