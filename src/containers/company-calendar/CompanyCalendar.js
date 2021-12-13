import React, { useCallback, useEffect, useState } from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Agenda } from 'react-native-calendars';
import HeaderBar from '../../components/Header';
import styles from '../../styles/CompanyCalendar';
import axiosConfig from '../../core/axiosConfig';
import moment from 'moment';
import { DaysOffList } from './DaysOffList';
import { LunchList } from './LunchList';

export const CompanyCalendar = ({ navigation }) => {
  const [items, setItems] = useState(null);

  const [fullDays, setFullDays] = useState(null);
  const [dateOff, setDateOff] = useState(null);
  const [lunch, setLunch] = useState(null);
  const [veggie, setVeggie] = useState(null);
  const [hasError, setHasError] = useState(false);
  const currentDay = moment().format('YYYY-MM-DD');

  const [listOff, setListOff] = useState(null);
  const [listLunch, setListLunch] = useState(null);
  const [isListVeggie, setIsListVeggie] = useState(false);

  const [showModalOff, setShowModalOff] = useState(false);
  const [showModalLunch, setShowModalLunch] = useState(false);

  const closeModalOff = () => {
    setShowModalOff(false);
  };

  const closeModalLunch = () => {
    setShowModalLunch(false);
  };

  const handleOpenModalOff = (list) => {
    setListOff(list);
    setShowModalOff(true);
  };

  const handleOpenModalLunch = (list, isVeggie) => {
    setListLunch(list);
    setIsListVeggie(isVeggie);
    setShowModalLunch(true);
  };

  const renderItem = useCallback((item) => {
    return (
      <View>
        {item['Days off'] !== undefined && (
          <TouchableOpacity
            style={[styles.item, styles.itemDaysOff]}
            onPress={() => handleOpenModalOff(item.list)}
          >
            <Text style={styles.itemText}>Days off: {item['Days off']}</Text>
          </TouchableOpacity>
        )}
        {item['Lunch'] !== undefined && (
          <TouchableOpacity
            style={[styles.item, styles.itemLunch]}
            onPress={() => handleOpenModalLunch(item.list, false)}
          >
            <Text style={styles.itemText}>Lunch: {item['Lunch']}</Text>
          </TouchableOpacity>
        )}
        {item['Veggie Lunch'] !== undefined && (
          <>
            <TouchableOpacity
              style={[styles.item, styles.itemVeggie]}
              onPress={() => handleOpenModalLunch(item.list, true)}
            >
              <Text style={styles.itemText}>
                Veggie Lunch: {item['Veggie Lunch']}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingTop: 30,
                borderBottomWidth: 1,
                borderBottomColor: '#d0d9d2',
                marginRight: 10,
              }}
            ></View>
          </>
        )}
      </View>
    );
  });
  const renderEmptyDate = useCallback(() => {
    return (
      <View style={styles.item}>
        <Text style={styles.emptyText}>No information</Text>
      </View>
    );
  });

  useEffect(() => {
    const temptItem = {};
    fullDays?.forEach((item, index) => {
      temptItem[item] = [
        { 'Days off': 0, list: [] },
        { Lunch: 0, list: [] },
        { 'Veggie Lunch': 0, list: [] },
      ];
    });
    dateOff?.forEach((item) => {
      const a = fullDays.find((element) => element === item.date);
      temptItem[a][0]['Days off']++;
      temptItem[a][0]['list'].push(item);
    });
    lunch?.forEach((item) => {
      const a = fullDays.find((element) => element === item.date);
      temptItem[a][1]['Lunch']++;
      temptItem[a][1]['list'].push(item);
    });
    veggie?.forEach((item) => {
      const a = fullDays.find((element) => element === item.date);
      temptItem[a][2]['Veggie Lunch']++;
      temptItem[a][2]['list'].push(item);
    });
    setItems(temptItem);
  }, [fullDays, lunch, veggie]);

  useEffect(() => {
    let full = [];
    (async () => {
      try {
        const offReponse = await axiosConfig.get('workday/calendar/admin');
        setDateOff(offReponse.data);
        full.push(...offReponse.data.map((item) => item.date));
      } catch (error) {
        setHasError(true);
      }
    })();
    (async () => {
      try {
        const lunchReponse = await axiosConfig.get('user-lunch/all');
        full.push(...lunchReponse.data.map((item) => item.date));
        const arr = full.filter(function (elem, pos) {
          return full.indexOf(elem) == pos;
        });
        setFullDays(arr);
        let temptLunch = [];
        let temptVeggie = [];
        lunchReponse.data.forEach((element) => {
          if (element.has_veggie) {
            temptVeggie.push(element);
          } else {
            temptLunch.push(element);
          }
        });
        setVeggie(temptVeggie);
        setLunch(temptLunch);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);

  return (
    <NativeBaseProvider>
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
              renderEmptyData={renderEmptyDate}
              renderEmptyDate={renderEmptyDate}
              selected={currentDay}
              markingType={'custom'}
              markedDates={{}}
            />
          </View>
        </View>
        {listOff !== null && (
          <DaysOffList
            isOpenModal={showModalOff}
            closeModal={closeModalOff}
            listItem={listOff}
          />
        )}
        {listLunch !== null && (
          <LunchList
            isOpenModal={showModalLunch}
            closeModal={closeModalLunch}
            listItem={listLunch}
            isVeggie={isListVeggie}
          />
        )}
      </View>
    </NativeBaseProvider>
  );
};
