/* eslint-disable react-native/no-inline-styles */
// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import ActivityButton from '../components/ActivityButton';

const ActivityScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.safearea}>
      <Text style={styles.heading}>Fun Activities</Text>
      <View style={styles.button_container}>
        <ActivityButton
          buttonTitle="Alphabet"
          onPress={() => navigation.navigate('AlphabetQuiz')}
        />
        <ActivityButton
          buttonTitle="Phrases"
          onPress={() => navigation.navigate('PhrasesQuiz')}
        />
        <ActivityButton
          buttonTitle="Numbers"
          onPress={() => navigation.navigate('NumbersQuiz')}
        />
        <ActivityButton
          buttonTitle="Shapes"
          onPress={() => navigation.navigate('ShapesQuiz')}
        />
        <ActivityButton
          buttonTitle="Colors"
          onPress={() => navigation.navigate('ColorsQuiz')}
        />
      </View>
    </ImageBackground>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  heading: {
    fontSize: 40,
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  button_container: {
    flex: 3,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
});
