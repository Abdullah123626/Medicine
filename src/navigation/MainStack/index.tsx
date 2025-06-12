import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firstScreen from '../../screens/firstscreen';
import startedScreen from '../../screens/loginScreen';
import loginScreen from '../../screens/loginScreen';
import signUp from '../../screens/signUp';
import waitingScreen from '../../screens/waitingScreen';
import forgotPassword from '../../screens/forgotPassword';
import verifyOtp from '../../screens/verifyOtp';
import newScreen from '../../screens/newScreeen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="firstScreen">
        <Stack.Screen name="firstScreen" component={firstScreen} />
        <Stack.Screen name="loginScreen" component={loginScreen} />
        <Stack.Screen name="signUp" component={signUp} />
        <Stack.Screen name="waitingScreen" component={waitingScreen} />
        <Stack.Screen name="forgotPassword" component={forgotPassword} />
        <Stack.Screen name="verifyOtp" component={verifyOtp} />
        <Stack.Screen name="newScreen" component={newScreen} />
       


      </Stack.Navigator>
    </NavigationContainer>
  );
}
