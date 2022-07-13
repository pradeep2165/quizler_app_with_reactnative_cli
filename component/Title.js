import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizler</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: 'gray',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
export default Title;
