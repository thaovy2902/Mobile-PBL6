import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/ForgotPassword";

export const ForgotPassWord = ({ navigation }) => {
  const [email, setEmail] = useState("");
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
        <Text style={styles.welcome}>Find your account</Text>
        <Text style={styles.please}>
          Please enter your email address to search for your account:
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email Address"
            placeholderTextColor="#868686"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.loginButtonSection}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
