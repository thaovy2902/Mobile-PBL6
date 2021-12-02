import React, { useCallback } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import styles from '../styles/CompanyCalendar';
import HeaderBar from '../components/Header';

export const CompanyCalendar = ({ navigation }) => {
  const items = {
    '2021-11-22': [{ name: 'Days off: 1' }],
    '2021-11-23': [{ name: 'Lunch: 2' }],
    '2021-11-24': [],
    '2021-11-25': [{ name: 'Lunch: 4' }, { name: 'Veggie Lunch: 2' }],
    '2021-11-26': [{ name: 'Days off: 2' }, { name: 'Veggie Lunch: 2' }],
  };
  const renderItem = useCallback((item) => {
    return (
      <TouchableOpacity style={[styles.item]} onPress={() => alert(item.name)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  });
  const renderEmptyDate = useCallback(() => {
    return <View style={styles.item}></View>;
  });
  return (
    // <Text>abc</Text>
    <View style={styles.container}>
      <HeaderBar title='Company Calendar' navigation={navigation}></HeaderBar>
      <View style={styles.frame}>
        <TouchableOpacity style={styles.detailBtn}>
          <Text
            style={styles.detailText}
            onPress={() => navigation.navigate('CalendarDetail')}
          >
            Detail
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
