import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MyHeader from '../components/MyHeader'
import firebase from 'firebase';
import db from '../config'

export default class Clalculator extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userId : firebase.auth().currentUser.email,
      weight:0,
      height:0,
      BMI:0,
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  calculateBMI=async()=>{
    // var userId = this.state.userId;
    var w = this.state.weight;
    // var h = this.state.height;
    var h_Converted = this.state.height/100;
    var bmi = Math.round(w/(h_Converted*h_Converted),1);
    this.setState({BMI:bmi});
    // var recordId = this.createUniqueId();
    
    
  }  

  // create a document for the user
  // createDoc=()=>{
  //   db.collection('all_records').add({
  //     name:this.state.userId
  //   })
  // }

  uploadData=async()=>{
    var recordId=this.createUniqueId();
    var userId=this.state.userId;
    db.collection('allRecords').add({
      "userId":userId,
      "weight":this.state.weight,
      "height":this.state.height,
      "bmi":this.state.BMI,
      "record_ID":recordId
    })
  }
  componentDidMount(){
    this.uploadData();
  }

  render(){
    return (
      <View>
      <View style={{flex:1}}>
          <MyHeader/>
      </View>
      <View>    
        <TextInput style={styles.textinput} keyboardType='number-pad' placeholder="Enter weight (in Kg)" onChangeText={(text)=>{
          this.setState({weight:text})
        }}/>
        <TextInput style={styles.textinput} keyboardType='number-pad' placeholder="Enter height (in cm)" onChangeText={(text)=>{
            this.setState({height:text})
        }}/>
        <TouchableOpacity style={styles.button} onPress={()=>{
                                                              this.calculateBMI(); 
                                                              this.uploadData();                                                           
                                                              }}><Text>Calculate</Text></TouchableOpacity>
    <Text>{this.state.BMI}</Text>
    {/* <TouchableOpacity style={{borderRadius:10, borderWidth:5, borderColor:'green', color: 'green', height:50,  :'center', alignItems:'center', aignContent:'center'}} onPress={()=>{this.props.navigation.navigate('HomePage')}}><Text>Back</Text></TouchableOpacity> */}
    <TouchableOpacity style={{
                              borderRadius:10, 
                              borderWidth:5, 
                              borderColor:'red', 
                              color: 'red', 
                              height:50, 
                              alignItems:'center', 
                              aignContent:'center', 
                              marginTop:50, 
                              backgroundColor:'red'
                            }} 
                      onPress={()=>{this.props.navigation.navigate('HomePage')}}><Text>Back</Text></TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  textinput:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#8ED3F2",
    shadowColor: "#00A8FF",
    shadowOffset: {
       width: 0,
       height: 5,         
     },
    shadowOpacity:5,
    shadowRadius:20,
    borderRadius:10,
    marginTop:200,
    borderWidth:5
  }
});
