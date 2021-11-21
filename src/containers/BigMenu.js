import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SpeedDial } from "react-native-elements";
import styles from "../styles/BigMenu";

export const BigMenu = ({ navigation }) => {
  const [open, setOpen] = useState(false);
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
        <View style={styles.frameBtn}>
          <TouchableOpacity
            style={[styles.menuItem, styles.menuItemMR]}
            onPress={() => navigation.navigate("Employee")}
          >
            <Text style={styles.menuItemText}>Employee Management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menuItem, styles.menuItemML]}
            onPress={() => navigation.navigate("CompanyCalendar")}
          >
            <Text style={styles.menuItemText}>Company Calendar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.frameBtn}>
          <TouchableOpacity
            style={[styles.menuItem, styles.menuItemMR]}
            onPress={() => navigation.navigate("Absence")}
          >
            <Text style={styles.menuItemText}>Absence Management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menuItem, styles.menuItemML]}
            onPress={() => navigation.navigate("Lunch")}
          >
            <Text style={styles.menuItemText}>Lunch Management</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.frameSetting}>
        <TouchableOpacity>
          <Image
            style={styles.imgIcon}
            resizeMode={"contain"}
            source={require("../assets/icon_settings.png")}
          />
        </TouchableOpacity>
      </View>
      <SpeedDial
        isOpen={open}
        icon={{ name: "add", color: "#4da4e0" }}
        openIcon={{ name: "close", color: "#4da4e0" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        color="#ffffff"
      >
        <SpeedDial.Action
          color="#ffffff"
          icon={{ name: "logout", color: "#4da4e0" }}
          title="Logout"
          onPress={() => navigation.navigate("Login")}
        />
      </SpeedDial>
    </View>
  );
};
