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


function PotatoesScreen() {
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
    
    
        <View   style={{ flex: 1 }}>
            <Text style={{fontSize:36,color:'black',fontWeight:'900',marginLeft:'25%',paddingTop:'40%'}}>POTATOES</Text>
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
          placeholder='Quantity'
          color="black"

          style={{
            flex: 1,
            padding: 10,
         borderBottomColor: 'black',
             borderBottomWidth: 1,
            fontSize:15,
            backgroundColor:'green',
            borderRadius:1,
            fontWeight:'700',
            marginTop:1,
            marginRight:60
           
           
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
	  backgroundColor: 'green',
    padding:1
	}}
         >
          
       


	  <Text style={{color: 'black',fontSize:15, fontWeight:'900'}}>Confirm</Text>
        </TouchableOpacity>
      </View>
  </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 2,
    
 
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: 1,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
export default PotatoesScreen;
