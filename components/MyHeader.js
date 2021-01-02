import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';


const MyHeader = props => {
  return (
    <View>
      
        <Header      
        leftComponent={<Icon name='bars' type='font-awesome' color='#696969' style={{alignSelf:'flex-start'}}/>}
        centerComponent={{ text: "BMI App", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}    
        style={{backgroundColor:"#00A8FF"}}
        />
     
      
    </View>
    
  );
};

 

export default MyHeader;
