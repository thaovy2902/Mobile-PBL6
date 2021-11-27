import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import styles from '../styles/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
const MyCustomRightComponent = () => {
  return (
    <View style={[styles.userHeader]}>
      <Image
        style={[styles.img, styles.userHeaderImg]}
        source={require('../assets/user_img.jpg')}
      />
    </View>
  );
};
const MyCustomLeftComponent = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MainMenu')}
      style={styles.menuBtn}>
      <Icon name="arrow-left" size={30} color="#fff" />
    </TouchableOpacity>
  );
};
const HeaderBar = ({ title, navigation }) => {
  return (
    <Header
      containerStyle={{
        backgroundColor: '#4da4e0',
      }}
      leftComponent={<MyCustomLeftComponent navigation={navigation} />}
      centerComponent={{
        text: title,
        style: { color: '#fff', fontSize: 14, fontWeight: '500' },
      }}
      rightComponent={<MyCustomRightComponent />}
    />
  );
};

export default HeaderBar;
