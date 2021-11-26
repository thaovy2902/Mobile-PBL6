import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from '../styles/CompanyCalendar';
import HeaderBar from '../components/Header';

export const LunchCalendar = ({ navigation }) => {
  const items = {
    '2021-11-22': [{ name: 'Lunch' }],
    '2021-11-23': [{ name: 'Lunch' }],
    '2021-11-24': [],
    '2021-11-25': [],
    '2021-11-26': [{ name: 'Lunch' }],
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={[styles.item]} onPress={() => alert(item.name)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const renderEmptyDate = () => {
    return <View style={styles.item}></View>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <TouchableOpacity style={styles.detailBtn}>
          <Text
            style={styles.detailText}
            onPress={() => navigation.navigate('LunchCalendarOptions')}
          >
            Options
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frameCalendar}>
        <View style={{ height: 600 }}>
          <Agenda
            items={items}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
          />
        </View>
      </View>
    </View>
  );
};
