import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/Header';

const MyCustomRightComponent = ({ navigation }) => {
  return (
    <View style={[styles.userHeader]}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          style={[styles.img, styles.userHeaderImg]}
          source={require('../assets/default-user.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const MyCustomLeftComponent = ({ navigation, backNavigate }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(backNavigate ? backNavigate : 'MainMenu')
      }
      style={styles.menuBtn}
    >
      <Icon name='arrow-left' size={30} color='#fff' />
    </TouchableOpacity>
  );
};
const HeaderBar = ({ title, navigation, backNavigate }) => {
  return (
    <Header
      containerStyle={{
        backgroundColor: '#4da4e0',
      }}
      leftComponent={
        <MyCustomLeftComponent
          navigation={navigation}
          backNavigate={backNavigate}
        />
      }
      centerComponent={{
        text: title,
        style: { color: '#fff', fontSize: 20, fontWeight: '500' },
      }}
      rightComponent={<MyCustomRightComponent navigation={navigation} />}
    />
  );
};

export default HeaderBar;
