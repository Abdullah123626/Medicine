import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firstScreen from '../../screens/firstscreen';
import startedScreen from '../../screens/loginScreen';
import loginScreen from '../../screens/loginScreen';
import signUp from '../../screens/signUp';
import waitingScreen from '../../screens/waitingScreen';
import forgotPassword from '../../screens/forgotPassword';
import verifyOtp from '../../screens/verifyOtp';
import homeScreen from '../../screens/homeScreen';
import groupChat from '../../screens/groupChat';
import notificationScreen from '../../screens/notificationScreen';
import { BottomBar } from '../BottomBar';
import paymentMethod from '../../screens/paymentMethod';
import addCard from '../../screens/addCard';
import paymentDone from '../../screens/paymentDone';
import mainScreen from '../../screens/mainScreen';
import newScreen from '../../screens/newScreen';
import peopleRequesting from '../../screens/peopleRequesting';
import groupChatRequest from '../../screens/groupChatRequest';
import emailPassword from '../../screens/emailPassword';
import loginMethod from '../../screens/loginMethod';
import logOut from '../../screens/logOut';
import googleLogin from '../../screens/googleLogin';
import phoneSignin from '../../phoneSignin';
import home from '../../screens/addCard/home';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="firstScreen">
        <Stack.Screen name="firstScreen" component={firstScreen} />
        <Stack.Screen name="loginScreen" component={loginScreen} />
        <Stack.Screen name="emailPassword" component={emailPassword} />
        <Stack.Screen name="loginMethod" component={loginMethod} />
        <Stack.Screen name="logOut" component={logOut} />
        <Stack.Screen name="home" component={home} />

        <Stack.Screen name="googleLogin" component={googleLogin} />
        <Stack.Screen name="signUp" component={signUp} />
        <Stack.Screen name="phoneSignin" component={phoneSignin} />
        <Stack.Screen name="waitingScreen" component={waitingScreen} />
        <Stack.Screen name="forgotPassword" component={forgotPassword} />
        <Stack.Screen name="verifyOtp" component={verifyOtp} />
        <Stack.Screen name="BottomBar" component={BottomBar} />
       



      </Stack.Navigator>
    </NavigationContainer>
  );
}
