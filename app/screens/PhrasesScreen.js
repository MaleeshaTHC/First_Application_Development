/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card2 from '../components/card2';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {windowHeight, windowWidth} from '../constants/Dimensions';

const PhrasesScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../assets/images/background2.jpg')}
      style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Essential Phrases</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <Card2
            name={'message1'}
            text1={'Good Morning !            '}
            text2={'Good Morning !'}
            text3={'Have a Good Day !'}
          />
          <Card2
            name={'message1'}
            text1={'Good Afternoon !          '}
            text2={'  Good Afternoon !'}
            text3={'It is a Great Day !'}
          />
          <Card2
            name={'message1'}
            text1={'Good Evening !           '}
            text2={'Good Evening !'}
            text3={'How is the Day !'}
          />
          <Card2
            name={'message1'}
            text1={'Good Night !               '}
            text2={'Good Night !'}
            text3={'  Sweet Dreams !'}
          />
          <Card2
            name={'message1'}
            text1={'Thank You !                  '}
            text2={'          It is my Pleasure !'}
            text3={'Welcome !'}
          />
          <Card2
            name={'message1'}
            text1={'Get Well Soon !             '}
            text2={'    Thank you for '}
            text3={'your wish !'}
          />
          <Card2
            name={'message1'}
            text1={'Hello, Nice to meet you !'}
            text2={'Nice to meet you too !'}
            text3={'How are you ?'}
          />
          <Card2
            name={'message1'}
            text1={'I am Sorry !                '}
            text2={'            It is Ok !'}
            text3={'         No Harm.'}
          />
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EnglishScreen')}
          style={styles.button}>
          <Text style={styles.btn_txt}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PhrasesQuiz')}
          style={styles.button}>
          <Text style={styles.btn_txt}>Activity</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default PhrasesScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginTop: 20,
  },
  bottom: {
    flex: 0.7,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 100,
  },
  text: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '40%',
    height: windowHeight / 15,
    backgroundColor: '#faecbf',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: '#bfebce',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
  },
  btn_txt: {
    fontSize: 20,
  },
});
