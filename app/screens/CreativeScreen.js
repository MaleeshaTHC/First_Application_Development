/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import Card from '../components/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class CreativeScreen extends Component {
  constructor() {
    super();
  }
  NavigateToColors = () => {
    this.props.navigation.navigate('ColorsScreen');
  };
  NavigateToPoems = () => {
    this.props.navigation.navigate('PoemsScreen');
  };
  NavigateToColorsQuiz = () => {
    this.props.navigation.navigate('ColorsQuiz');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('MathsScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('CommunityScreen');
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>Creative Kids</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.card_container}>
            <Card
              text={'Do you want to know Alphabet? Come try it !'}
              main={'COLORS'}
              onPress={this.NavigateToColors}
              name={'book'}
            />
            <Card
              text={'Do you want to know Phrases? Come try it !'}
              main={'POEMS'}
              onPress={this.NavigateToPoems}
              name={'book'}
            />

            <View>
              <Image
                source={{
                  uri: 'https://thumbs.dreamstime.com/z/cute-little-girl-show-close-mouth-finger-pose-227545171.jpg',
                }}
                style={{
                  width: 180,
                  height: 260,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: 10,
                  backgroundColor: '#e6f1f2',
                  borderRadius: 15,
                }}
              />
            </View>
            <Card
              main={'Quiz of Colors'}
              onPress={this.NavigateToColorsQuiz}
              name={'edit'}
            />
          </View>
        </View>
        <View style={styles.footer}>
        <FontAwesome.Button
            name="chevron-left"
            size={25}
            backgroundColor="#88d9ca"
            color="#000000aa"
            onPress={this.NavigateToBack}
            borderRadius={10}
          />
          <MaterialCommunityIcons.Button
            onPress={this.NavigateToHome}
            name="home"
            size={25}
            backgroundColor="#88d9ca"
            color="#000000aa"
          />
          <FontAwesome.Button
            name="chevron-right"
            size={25}
            color="#000000aa"
            backgroundColor="#88d9ca"
            borderRadius={10}
            onPress={this.NavigateToNext}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  card_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.55,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 400,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    marginBottom: 40,
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
