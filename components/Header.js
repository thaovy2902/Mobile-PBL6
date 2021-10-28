import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";


const Header = () => {

  return (
    <View style={[styles.container, styles.header]}>
      <TouchableOpacity style={styles.menuBtn}>
          <Image 
            style={styles.img}
            resizeMode={'contain'}
            source={require("../assets/icon_menu.png")} />
      </TouchableOpacity>
      <View style={styles.logoHeader}>
        <Image 
            style={[styles.img, styles.logoHeaderImg]}
            resizeMode={'contain'}
            source={require("../assets/logo_white.png")} />
      </View>
      <View style={[styles.userHeader]}>
        <Image 
        style={[styles.img, styles.userHeaderImg]}

        source={require("../assets/anhcanhan_DuongThaoVy.jpg")} />
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4da4e0",
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  img: {
    width: 40,
    height: 40,
  },
  userHeaderImg: {
    borderRadius: '50%',
  },
  logoHeaderImg: {
    padding: 30,
  },
  logoHeader: {
    alignSelf: 'baseline',
  },
  userHeader: {
    width: 40,
    height: 40,
    paddingRight: 64,
  },
  menuBtn: {
    paddingLeft: 24,
  }
});

module.exports = Header;
