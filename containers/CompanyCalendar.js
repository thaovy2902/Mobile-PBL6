import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/CompanyCalendar';
import Header from './Header';
export const CompanyCalendar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Company Calendar" navigation={navigation}></Header>
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
