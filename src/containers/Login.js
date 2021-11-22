import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/Login";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onLoggedIn = async () => {
    const formBody = new FormData();
    formBody.append("username", email);
    formBody.append("password", password);
    formBody.append("grant_type", "password");

    await fetch("http://127.0.0.1:8000/api/v1/oauth2/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          setError(false);
          setEmail("");
          setPassword("");
          navigation.navigate("LoginSuccess");
        } else {
          setError(true);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("../assets/logo_white.png")}
        />
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
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#868686"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        {error && (
          <Text style={styles.errorText}>Invalid email or password</Text>
        )}
        <View style={styles.loginButtonSection}>
          <TouchableOpacity style={styles.loginBtn} onPress={onLoggedIn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassWord")}
          >
            <Text style={styles.forgot_button}>Forgotten Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
