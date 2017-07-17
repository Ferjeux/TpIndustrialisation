import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,Image,Animated,Easing
} from 'react-native';
export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE_NAME';
export default class App extends Component {
 static navigationOptions = {
    title: 'Animations',
  };
    constructor(props){
        super(props)
        this.spinValue = new Animated.Value(0)
    }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      },
    ).start(() => this.spin())
  }
  render(){
     const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <Animated.View
      >
        <Animated.Image
          style={{
            width: 50,
            height: 50,
       transform: [{rotate: spin}] }}
          source={require('../../assets/logo-apple2.jpg')}
        />
      </Animated.View>
    )
  }
}