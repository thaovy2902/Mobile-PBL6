import * as React from 'react';

import { View } from 'react-native';
import { FormControl, Input, NativeBaseProvider, Select } from 'native-base';
import styles from '../styles/Employee';
import { RequestListForm } from '../components/RequestListForm';
import HeaderBar from '../components/Header';

export const Employee = ({ navigation }) => {
  tableHead = ['Name', 'Position', 'Team'];
  tableData = [
    ['Admin', '', 'FE'],
    ['Admin', 'Team Leader', 'FE'],
    ['Admin', 'Team Leader', 'BE'],
    ['Admin', 'Team Leader', 'BE'],
  ];
  widthArr = [160, 130, 80];
  return (
    <NativeBaseProvider>
      <HeaderBar
        title='Employee Management'
        navigation={navigation}
        backNavigate='MainMenu'
      />
      <View style={styles.employeeSearch}>
        <FormControl mt='3'>
          <Input maxWidth='100%' placeholder='Enter name' />
        </FormControl>
        <View style={styles.employeeSearchCol6}>
          <View style={styles.searchCol6Item}>
            <FormControl mt='3'>
              <Select
                maxWidth='200'
                accessibilityLabel='Select'
                placeholder='Position'
                mt={1}
              >
                <Select.Item label='Director' value='director' />
                <Select.Item
                  label='Software Architect'
                  value='sofwareArchitect'
                />
                <Select.Item label='Project Manager' value='PM' />
              </Select>
            </FormControl>
          </View>
          <View style={styles.searchCol6Item}>
            <FormControl mt='3'>
              <Select
                maxWidth='200'
                accessibilityLabel='Select'
                placeholder='Team'
                mt={1}
              >
                <Select.Item label='Frontend Develop' value='FE' />
                <Select.Item label='Backend Develop' value='BE' />
                <Select.Item label='HR' value='HR' />
                <Select.Item label='All' value='all' />
              </Select>
            </FormControl>
          </View>
        </View>
      </View>
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </NativeBaseProvider>
  );
};
