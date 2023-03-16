import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import validator from "validator";

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validator.isEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validator.isStrongPassword(password)) {
      alert(
        "Please enter a strong password (at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one symbol)."
      );
      return;
    }

    axios
      .post("http://192.168.254.238:3000/Users", {
        email: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
      })
      .then((data) => {
        if (data.error) {
          setErrorMessage("try again");
        } else {
          setShowConfirmation(true);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while creating your account.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{alignSelf:'center',color:'green',fontStyle:'italic',fontWeight:'600',fontSize:35,marginTop:120,marginBottom:30}}>Welcome!!</Text>
      <Text style={styles.title}>Sign Up</Text>
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
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color:'black',fontSize:20}}>Already have an account?Login</Text>
      </TouchableOpacity>
      {showConfirmation && (
        <Text style={{ color: "green", marginTop: 10 }}>
          Account created successfully. Please check your email for confirmation.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor:'gray'
   
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
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

export default SignUpScreen;
