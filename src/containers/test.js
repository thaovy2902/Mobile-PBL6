// import React, { useState } from "react";
// import Swipeable from 'react-native-swipeable-row';
// import { Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
// import styles from "../styles/ForgotPassword";

// export const ForgotPassWord1 = ({ navigation }) => {
//   const leftContent = <Text>Pull to activate</Text>;

//   const rightButtons = [
//     <TouchableHighlight>
//       <Text>Button 1</Text>
//     </TouchableHighlight>,
//     <TouchableHighlight>
//       <Text>Button 2</Text>
//     </TouchableHighlight>,
//   ];
//   const [email, setEmail] = useState("");
//   return (
//     <View style={styles.container}>
//       <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
//         <Text>My swipeable content</Text>
//       </Swipeable>
//     </View>
//   );
// };

import React, { Component, useState } from "react";
import { Dimensions, Pressable } from "react-native";
import { DrawerHeader, DrawerItem, DrawerSection, FabSpeedDial } from "material-bread";
import { Fab } from "material-bread";
// import { Animated, StyleSheet, View } from 'react-native';
// import { RectButton } from "react-native-gesture-handler";
// import Swipeable from 'react-native-swipeable';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  TouchableHighlight,
  StyleSheet,
  Button
} from "react-native";
import style from "react-native-datepicker/style";
// import styles from '../styles/ForgotPassword';
// import Swipeable from "react-native-gesture-handler/Swipeable";
import { DrawerBottom } from 'material-bread';

export const ForgotPassWord1 = () => {
  const actions = [
    {
      text: "Favorites",
    },
    {
      text: "Language",
    },
    {
      text: "Location",
    },
    {
      text: "Video",
    },
  ];

  const deleteItem = () => {
    alert("OK DELETE");
  };
  const leftContent = () => {
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text>Delete</Text>
      </View>
    );
  };

  const rightButtons = [
    <TouchableOpacity>
      <Text>Button 1</Text>
    </TouchableOpacity>,
    <TouchableOpacity>
      <Text>Button 2</Text>
    </TouchableOpacity>,
  ];
  const actionsExtended = [
    // <Fab animated mini key={4} label="Range" backgroundColor={'black'} icon={'attach-money'} />,
    // <Fab animated mini key={3} label="Today" backgroundColor={'#009688'} icon={'edit'} />,
    // <Fab animated mini key={3} label="Today" backgroundColor={'#009688'} icon={'edit'} />,
    // <Fab mini backgroundColor={'#E91E63'} icon={'archive'} />
    <Text style={styles.btnBack}>Range</Text>,
    <Text style={styles.btnBack}>Veggie</Text>,
    <Text style={styles.btnBack}>Today</Text>,
  ];
  const [visible, setVisible] = useState(false)
  return (
    <>
      <View style={{ flex: 1}}>
        <Button
          title="Learn More"
          onPress={() => setVisible(true)}
        />
        <DrawerBottom
          visible={visible}
          onBackdropPress={() => setVisible(false)}
          onSwipeDown={() => setVisible(false)}>
          <View>
            <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
            <DrawerSection>
              <DrawerItem text={'Range'} icon={'mail'} active />
              <DrawerItem text={'Today'} icon={'send'} />
              <DrawerItem text={'Veggie'} icon={'favorite'} />
            </DrawerSection>
          </View>
        </DrawerBottom>
      </View>
    </>
    // <>
    //   <View style={[styles.frameSpeedDial, {marginRight: 10}]}>
    //     <FabSpeedDial
    //       actions={actionsExtended}
    //       style={{ marginRight: 100 }}
    //       fab={
    //         <Fab
    //           mini
    //           label="Cancel lunch"
    //           backgroundColor={"#CD5C5C"}
    //           icon={"delete"}
    //         />
    //       }
    //     />
    //   </View>
    //   <View style={styles.frameSpeedDial, {marginRight: 160}}>
    //     <FabSpeedDial
    //       actions={actionsExtended}
    //       style={{ marginRight: 200 }}
    //       fab={
    //         <Fab
    //           mini
    //           label="Set lunch"
    //           backgroundColor={"#6495ED"}
    //           icon={"add"}
    //         />
    //       }
    //     />
    //   </View>
    // </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4da4e0",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    marginVertical: 10,
  },
  likeDisplayer: {
    position: "absolute",
    zIndex: 100000,
    left: "20%",
    top: "35%",
  },
  btnBack: {
    backgroundColor: "white",
    textAlign: "center",
    padding: 7,
    // width: 20,
    // height: 20,
    height: 35,
    width: 80,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  btnMenu: {
    backgroundColor: "white",
    textAlign: "center",
    padding: 7,
    // width: 20,
    // height: 20,
    height: 35,
    width: 80,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  frameSpeedDial: {
    // justifyContent:"flex-end",
    // flexDirection: 'row',
    // borderWidth: 0,
    // position: 'absolute',
    marginTop: Dimensions.get("window").height - 30,
    // marginRight: 15,
    // marginTop: 500,
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // backgroundColor: 'red'
  },
});
