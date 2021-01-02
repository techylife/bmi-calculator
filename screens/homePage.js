import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {Header} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'





export default class HomePage extends React.Component {
    
    render() {
        return(
            <View>
                <View>
                    <MyHeader/> 
                </View>                
                <View style={{flex:1}}>
                    <Text>The records to be shown here</Text>
                </View>
                <View>
                    <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=>{this.props.navigation.navigate('Calculator')}}><Image source={require('../buttons/button2.png')} /></TouchableOpacity> 
                                   
                </View>
            </View>                 
        )
    }
}
const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:200,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#8ED3F2",
      shadowColor: "#00A8FF",
      shadowOffset: {
         width: 0,
         height: 5,         
       },
      shadowOpacity:5,
      shadowRadius:20,
      borderRadius:200,
      marginTop:200,
      
    }
   
  })