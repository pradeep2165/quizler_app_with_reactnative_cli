import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Center,
} from 'react-native';
import Title from '../component/Title';

function Home({navigation}) {
  return (
    <View style={style.container}>
      <Title />
      <View style={style.bannerContainer}>
        <Image
          style={style.banner}
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/preview/online-exam-5718735-4779389.png?w=0&h=1400',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={style.button}>
        <Text style={style.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  banner: {width: 300, height: 300},
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
});

export default Home;
