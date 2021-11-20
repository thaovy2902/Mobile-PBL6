import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const onLoggedIn = async () => {

    const formBody = new FormData();
    formBody.append("username", "superadmin@gmail.com");
    formBody.append("password", "Abc@12345");
    formBody.append("grant_type", "password");

    
   await fetch("http://127.0.0.1:8000/api/v1/oauth2/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: formBody,
    })
    .then(response => response.json())
    .then(data => {
        if (data.access_token) {
            navigation.navigate('LoginSuccess')
        }
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
            style={styles.image}
            resizeMode={'contain'}
            source={require("../assets/logo_white.png")} />
        <Text style={styles.full}>FULL HOPE</Text>
        <Text style={styles.slogan}>Try hard with more hope!</Text>
      </View>
      <View style={styles.frame}>
        <Text style={styles.welcome}>WELCOME BACK!</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email Address"
            placeholderTextColor="#868686"
            onChangeText={(email) => setEmail(email)}
          />
          
        </View>

        <View style={styles.inputView}>
          
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#868686"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

    <View style={styles.loginButtonSection}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={onLoggedIn}>Login</Text>
        </TouchableOpacity>

        
        <TouchableOpacity>
          <Text style={styles.forgot_button}
          onPress={() =>
            navigation.navigate('ForgotPassWord')
          }
          >Forgotten Account?</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4da4e0",
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    marginBottom: SCREEN_HEIGHT*0.1,
    marginTop:-SCREEN_HEIGHT*0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH*0.5,
    height: SCREEN_WIDTH*0.3,
  },
  inputView: {
    // border: "solid 0.5px #4da4e0",
    borderWidth: 0.5,
    backgroundColor: "#fff",
    width: "80%",
    height: "15%",
    marginBottom: 20,
    marginLeft: 40,
    alignItems: "center",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  TextInput: {
    flex: 1,
    alignItems: 'center',
    // marginLeft: 40,
    // fontFamily: "SegoeUI",
    // fontStretch: 'normal',
    fontStyle: 'normal',
    // letterSpacing: 'normal',
    fontSize: SCREEN_WIDTH*0.04,
  },

  forgot_button: {
    fontSize: SCREEN_WIDTH*0.04,
    color: "#fff",
  },

  loginBtn: {
    width: "40%",
    height: "33%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  loginButtonSection: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  full: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
    fontWeight: 'bold',
    // fontFamily: "SegoeUI",
    marginBottom: 10,
    marginTop: -20,
    fontSize: SCREEN_WIDTH*0.07,
  },
  slogan: {
    textAlign: "center",
    color: "#fff",
    fontSize: SCREEN_WIDTH*0.04,
    // fontWeight: 600,
    // fontFamily: "SegoeUI",
  },
  frame: {
    opacity: 0.9,
    width: "100%",
    height: 330,
  },
  welcome: {
    textAlign: "center",
    color: "#fff",
    fontSize: SCREEN_WIDTH*0.07,
    fontWeight: 'bold',
    // fontStretch: 'normal',
    fontStyle: 'normal',
    // letterSpacing: 'normal',
    width: "100%",
    marginBottom: SCREEN_HEIGHT*0.04,
  },
  loginText: {
    color: '#4da4e0',
    // fontFamily: "SegoeUI",
    fontWeight: "bold",
    fontSize: SCREEN_WIDTH*0.06,
  }
});