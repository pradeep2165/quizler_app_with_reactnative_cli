import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';

function Result({navigation, route}) {
  const {result} = route.params;
  return (
    <View style={style.container}>
      <View style={style.button}>
        <Text style={style.buttonText}>Result</Text>
      </View>
      <View style={style.scoreContainer}>
        <Text style={style.score}>
          {' '}
          You Have Scored {(JSON.stringify(result) / 10) * 100}%
        </Text>
      </View>

      <View style={style.bannerContainer}>
        <Image
          style={style.banner}
          source={{
            uri: 'https://cdni.iconscout.com/illustration/free/preview/online-courses-4715662-3913111.png?w=0&h=1400',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={style.button}>
        <Text style={style.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  banner: {width: 300, height: 300, alignSelf: 'center'},

  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1a75af',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreContainer: {
    padding: 16,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 16,
  },
  score: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default Result;
