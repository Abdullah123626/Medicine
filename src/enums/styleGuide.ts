import {Dimensions, StyleSheet} from 'react-native';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
const wp = (percentage: number) => {
  const value = (percentage * WIDTH) / 100;
  return Math.round(value);
}
const hp = (percentage: number) => {
  const value = (percentage * HEIGHT) / 100;
  return Math.round(value);
};
export {wp, hp}; 
                                     