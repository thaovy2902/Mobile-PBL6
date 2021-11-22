import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RequestListForm } from '../components/RequestListForm';
import { SearchTextBar } from '../components/SearchTextBar';
import styles from '../styles/LunchProvider';

export const LunchProvider = () => {
  tableHead = ['Name', 'Phone', 'Budget'];
  tableData = [
    ['Admin', '0909090909', 'ABC'],
    ['Admin', '0808080808', 'ABC'],
    ['Admin', '0909090909', 'ABC'],
    ['Admin', '0909090909', 'ABC'],
  ];
  widthArr = [180, 120, 70];
  return (
    <>
      <View style={styles.frameHeader}>
        <SearchTextBar />
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
