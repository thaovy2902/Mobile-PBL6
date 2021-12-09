import React, { useCallback, useEffect, useState } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import HeaderBar from '../../components/Header';
import styles from '../../styles/CompanyCalendar';
import axiosConfig from '../../core/axiosConfig';

export const CompanyCalendar = ({ navigation }) => {
  const [dateOff, setDateOff] = useState(null);
  const [lunch, setLunch] = useState(null);
  const [veggie, setVeggie] = useState(null);
  const [hasError, setHasError] = useState(false);

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

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get('workday/calendar/admin');
        const dateOffHandle = response.data.map((item) => ({
          id: item.id,
          start: item.date,
          end: item.date,
          title: item.request_off.leave_type.name,
          typeOff: item.request_off.leave_type.name,
          name: item.name,
          email: item.email,
          reason: item.request_off.reason,
          lunch: item.lunch ? 'Yes' : 'No',
          type: item.request_off.leave_type.leave_type_group,
          timeType: item.type,
          color: '',
          detail: [],
        }));
        setDateOff(dateOffHandle);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axiosConfig.get('user-lunch/all');
  //       let notVeg = response.data.filter(
  //         (item) => item.has_veggie === false
  //       );
  //       let hasVeg = response.data.filter(
  //         (item) => item.has_veggie === true
  //       );
  //       let newNotVeg = this.changeFormatLunch(notVeg);
  //       let newHasVeg = this.changeFormatLunch(hasVeg);
  //       setDateOff(dateOffHandle);
  //     } catch (error) {
  //       setHasError(true);
  //     }
  //   })();
  // }, []);

  return (
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
