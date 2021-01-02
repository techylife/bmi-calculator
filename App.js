import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Calculator from './screens/calculator'
import WelcomeScreen from './screens/welcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import HomePage from './screens/homePage.js'
import Result from './screens/resultScreen'
// import {AppTabNavigator} from './components/appTabNavigator'


export default class App extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  HomePage:{screen:HomePage},
  Calculator:{screen:Calculator},
  ResultPage:{screen:Result},
  // BottomTab:{screen:AppTabNavigator},
})

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
