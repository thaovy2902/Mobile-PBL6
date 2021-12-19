import React from 'react';

import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const LeaveTypesList = ({ tableHead, data, widthArr }) => {
  const editBtn = (id) => (
    <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Icon name='edit' size={24} color='#4da4e0' />
    </TouchableOpacity>
  );
  const deleteBtn = (id) => (
    <TouchableOpacity>
      <Icon name='trash-alt' size={24} color='#4da4e0' />
    </TouchableOpacity>
  );
  const tableData = data?.map((item) => [
    item.name,
    item.days,
    item.descriptions,
    [editBtn(item.id), deleteBtn(item.id)],
  ]);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#4da4e0' }}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={styles.header}
              textStyle={styles.textHead}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#4da4e0' }}>
              {tableData?.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={[
                    styles.row,
                    index % 2 && { backgroundColor: '#ffffff' },
                  ]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#4da4e0' },
  text: { textAlign: 'center', fontWeight: '300', fontSize: 14 },
  textHead: { textAlign: 'center', fontWeight: '400', fontSize: 16 },
  dataWrapper: { marginTop: -1 },
  row: { height: 60, backgroundColor: '#ffffff' },
});
