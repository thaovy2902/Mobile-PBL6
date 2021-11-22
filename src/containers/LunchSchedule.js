import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RequestListForm } from '../components/RequestListForm';
import { SearchDateBar } from '../components/SearchDateBar';
import styles from '../styles/LunchSchedule';

export const LunchSchedule = () => {
  tableHead = ['Date', 'Provider', 'Note'];
  tableData = [
    ['2021-10-25', 'Admin', 'ABC'],
    ['2021-10-27', 'Admin', 'ABC'],
    ['2021-10-29', 'Admin', 'ABC'],
    ['2021-10-30', 'Admin', 'ABC'],
  ];
  widthArr = [180, 120, 70];
  return (
    <>
      <View style={styles.frameHeader}>
        <SearchDateBar />
        <TouchableOpacity style={styles.detailBtn}>
          <Text style={styles.detailText}>Add</Text>
        </TouchableOpacity>
      </View>
      
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
