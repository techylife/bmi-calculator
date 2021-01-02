import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import MyHeader from '../components/MyHeader'
import firebase from 'firebase';
import db from '../config'

export default class Result extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userId:firebase.auth().currentUser.email,
      recordId:this.props.navigation.getParam('allRecords')["record_ID"],
      weight:"",
      height:"",
      BMI:"",
      resultText:'',
      recordDocId:''
    }
  }


  
  // calculateBMI=async()=>{
  //   var userId = this.state.userId;
  //   var w = this.state.weight;
  //   var h = this.state.height;
  //   var h_Converted = this.state.height/100;
  //   var bmi = Math.round(w/(h_Converted*h_Converted),1);
  //   this.setState({BMI:bmi});
  //   var recordId = this.createUniqueId();
    
    
  // }  

  getData=()=>{
    db.collection('allRecords').where('userId'+'=='+this.state.recordId).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          weight:doc.data(weight),
          height:doc.data(height),
          BMI:doc.data(bmi)
        })
      })
    })
    
  }

  // checkBMIValue=()=>{
  //   this.getData();
  //   this.state.BMI<=19?this.setState({resultText:'Underweight'})
  //   : this.state.checkBMIValue>18&&this.state.checkBMIValue<=25?this.setState({resultText:'Normal'}):this.setState({resultText:'Overweight'})
  // }
  componentDidMount(){
    this.getData();
    // this.checkBMIValue();
  }
  render(){
    return (
      
      <View style={styles.container}>
        <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={this.getData}><Image source={require('../buttons/button.png')} /></TouchableOpacity> 
        <Text>{this.state.BMI}
        {this.state.recordDocId}</Text>
        
                
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
});
