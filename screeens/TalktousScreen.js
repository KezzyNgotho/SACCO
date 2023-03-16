import set from 'lodash/set';
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";


function TalktousScreen() {
  const [email, setEmail] = useState("");
  const [quantity, setquantity] =useState("");
  const [pass, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
    } else {
      console.log("Submitted: ", email, password);
    }
  };

  //const handleSubmit = () => {
  // Handle form submission here

  //};
  return (
    <ImageBackground
    source={require('../assets/2441285.jpg')}
    style={{ flex: 1 }}
    >
    
        <View   style={{ flex: 1 }}>
            <Text style={{fontSize:36,color:'black',fontWeight:'900',marginLeft:'30%',paddingTop:'20%'}}>Talk to us!!</Text>
     <View style={{
        flexDirection: 'row',
        marginBottom: 1,
        marginTop:5
      }}>
         <Icon style={{marginLeft:30,marginTop:10}}
          name="email" size={30} color={'green'} /> 
        <TextInput
          textContentType={'quantity'}
          onChangeText={(text) => setquantity(text)}
          value={quantity}
          autoCompleteType={'quantity'}
          // clearButtonMode={'while-editing'}
          // keyboardType={'email-address'}
          // returnKeyLabel={'next'}
          // returnKeyType={'next'}
          placeholder='Message'
         

          style={{
            flex: 1,
            padding: 30,
         borderBottomColor: 'black',
             borderBottomWidth: 4,
            fontSize:15,
            backgroundColor:'#00008b',
            borderRadius:1,
            fontWeight:'700',
            marginTop:1,
            marginRight:30
           
           
          }}
          
        />
      
  
  </View>
  
  <View style={{
        alignSelf: 'center',
        marginTop: 30,
      }}>


        <TouchableOpacity  
       
        style={{
	  paddingHorizontal: 20,
	  paddingVertical: 9,
	  borderRadius: 90,
	  elevation: 18,
	  shadowColor: 'gray',
	  shadowRadius: 60,
	  backgroundColor: '#00008b',
    padding:1
	}}
         >
          
       


	  <Text style={{color: 'black',fontSize:15, fontWeight:'900'}}>Send</Text>
        </TouchableOpacity>
      </View>
      <Text style={{marginTop:"70%",fontSize:25,paddingHorizontal:20,fontWeight:'700'}}>
        Thank you for choosing us!!
       </Text>
  </View>
  </ImageBackground>
  );
}


export default TalktousScreen;
