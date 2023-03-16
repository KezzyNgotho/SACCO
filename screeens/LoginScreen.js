import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AuthContext from "../AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("calling here");
    axios
      .post("http://192.168.254.238:3000/loginUser", {
        email: email,
        password: password,
      })
      .then((data) => {
        // Doing something with the data
        if (email && password) {
          // All fields are filled, proceed with sign up logic
          //console.log("Sign up successful!");
          //HomeStack
          navigation.navigate("HomeStack");
        } else {
          alert("Please fill in all fields.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          fontStyle: "italic",
          color: "black",
          marginBottom: 40,
          marginTop: 90,
        }}
      >
        Heyy Its A Beautiful Day!!
      </Text>
      <Text style={styles.title}>Login</Text>
      <Image
        // source={require("../assets/icons8-male-user-48.png")}
        source={require("../assets/icons8-male-user-48.png")}
        resizeMode="contain"
        style={{
          alignSelf: "center",
        }}
      ></Image>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={{ color: "black", fontSize: 20 }}>
          Don't have an account?SignUp
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    backgroundColor: "gray",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LoginScreen;
