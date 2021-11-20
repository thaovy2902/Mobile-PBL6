import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";

export const SideMenu = () => {

  return (
    <View style={[styles.container, styles.sideMenu]}>
      <View style={[styles.headerMenu]}>
        <Image 
            style={styles.imageLogo}
            resizeMode={'contain'}
            source={require("../assets/logo_white.png")} />
        <Text style={styles.full}>FULL HOPE</Text>
      </View>
      <View style={[styles.bodyMenu]}>
            <TouchableOpacity style={styles.menuItem}>
                <Image 
                  style={styles.imgIcon}
                  resizeMode={'contain'}
                  source={require("../assets/icon_employee.png")}
                />
                <Text style={styles.menuText}>Employee Management</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
                <Image 
                  style={styles.imgIcon}
                  resizeMode={'contain'}
                  source={require("../assets/icon_calendar.png")}
                />
                <Text style={styles.menuText}>Company Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
                <Image 
                  style={styles.imgIcon}
                  resizeMode={'contain'}
                  source={require("../assets/icon_team.png")}
                />
                <Text style={styles.menuText}>Team Management</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
                <Image 
                  style={styles.imgIcon}
                  resizeMode={'contain'}
                  source={require("../assets/icon_attendance.png")}
                />
                <Text style={styles.menuText}>Absence Management</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
                <Image 
                  style={styles.imgIcon}
                  resizeMode={'contain'}
                  source={require("../assets/icon_lunch.png")}
                />
                <Text style={styles.menuText}>Lunch Management</Text>
          </TouchableOpacity>
      </View>
      <View style={[styles.footerMenu]}>
        <TouchableOpacity>
                <Image 
                  style={styles.imgIcon}
                  resizeMode={'contain'}
                  source={require("../assets/icon_settings.png")}
                />
        </TouchableOpacity>
      </View>
    </View>
  )
};
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4da4e0",
  },
  sideMenu: {
    flexDirection: 'column',
    width: '70%',
    height: '100%'
    // height: SCREEN_HEIGHT,
  },
  headerMenu: {
    marginTop: SCREEN_WIDTH*0.05,
    alignItems: 'center',
  },
  bodyMenu: {
    width: "100%",
    marginTop: SCREEN_WIDTH*0.1,
  },
  footerMenu: {
    marginTop: "auto"
  },
  imageLogo: {
    width: SCREEN_WIDTH*0.5,
    height: SCREEN_WIDTH*0.3,
  },
  imgIcon: {
    width: 24,
    paddingLeft: 48,
  },
  full: {
    textAlign: "center",
    color: "#fff",
    marginTop: -20,
    fontSize: SCREEN_WIDTH*0.07,
  },
  menuItem: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 30,
  },
  menuText: {
    color: "white",
    fontSize: SCREEN_WIDTH*0.045,
    fontWeight: "bold"
  }
});

