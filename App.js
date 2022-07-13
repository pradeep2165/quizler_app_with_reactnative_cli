import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet, Text, View} from 'react-native';
// import Home from './screen/Home';
// import Quiz from './screen/Quiz';
// import Result from './screen/Result';
import MyStack from './navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
// const style = StyleSheet.create({
//   container: {
//     padding: 40,
//   },
// });
