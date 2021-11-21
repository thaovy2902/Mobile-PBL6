import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/CompanyCalendar';
import HeaderBar from '../components/Header';
export const CompanyCalendar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar title="Company Calendar" navigation={navigation}></HeaderBar>
      <View style={styles.frame}>
        <TouchableOpacity style={styles.detailBtn}>
          <Text
            style={styles.detailText}
            onPress={() => navigation.navigate('CalendarDetail')}>
            Detail
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
