import set from "lodash/set";
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
  Pressable,
} from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

import Icon from "react-native-vector-icons/MaterialIcons";

function TalktousScreen() {
  const [message, setmessage] = useState("");
  const navigation = useNavigation();
  const [error, setError] = useState("");


  const handleSubmit = () => {
  
      console.log("calling here");
      axios
        .post("http://192.168.82.238:3000/Message", {
         message:message
       
        })
        .then((data) => {
          // Doing something with the data
          if (data.error) {
            setErrorMessage("  invalid message type");
          } else {
            navigation.navigate("Home");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
  

  //};
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 36,
          color: "black",
          fontWeight: "900",
          marginLeft: "30%",
          paddingTop: "20%",
        }}
      >
        Talk to us!!
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 1,
          marginTop: 5,
        }}
      >
        <TextInput
          textContentType={"message"}
          onChangeText={(text) => setmessage(text)}
          value={message}
          autoCompleteType={"message"}
          // clearButtonMode={'while-editing'}
          // keyboardType={'email-address'}
           returnKeyLabel={'next'}
           returnKeyType={'next'}
          placeholder="Message"
          style={{
            flex: 1,
            padding: 20,
            borderColor: "black",
            borderBottomWidth: 4,
            borderRightWidth:4,
            borderTopWidth:4,
            borderLeftWidth:4,
            fontSize: 15,
            backgroundColor: "gray",
            borderRadius: 1,
            fontWeight: "700",
            marginTop: 1,
            marginRight: 20,
            marginLeft: 10,
          }}
        />
      </View>

      <View
        style={{
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
         onPress={handleSubmit}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 9,
            borderRadius: 90,
            elevation: 18,
            shadowColor: "gray",
            shadowRadius: 60,
            backgroundColor: "gray",
            padding: 1,
          }}
        >
          <Text style={{ color: "black", fontSize: 15, fontWeight: "900" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: "70%",
          fontSize: 25,
          paddingHorizontal: 20,
          fontWeight: "700",
          color:'green',
          fontStyle:'italic'
        }}
      >
        Thank you for choosing us!!
      </Text>
    </View>
  );
}

export default TalktousScreen;
