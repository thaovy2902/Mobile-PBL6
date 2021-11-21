import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import styles from '../styles/Header';

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
      onPress={() => navigation.navigate('BigMenu')}
      style={styles.menuBtn}>
      <Image
        style={styles.img}
        resizeMode={'contain'}
        source={require('../assets/transparent-arrow-icon.png')}
      />
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
        style: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
      }}
      rightComponent={<MyCustomRightComponent />}
    />
  );
};

export default HeaderBar;
