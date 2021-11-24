import * as React from 'react';
import { View } from 'react-native';
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
  Modal,
  Button,
  Select,
  Checkbox,
} from 'native-base';
import { RequestListForm } from '../components/RequestListForm';
import HeaderBar from '../components/Header';

export const Employee = ({navigation}) => {
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
      <HeaderBar title='Employee Management' navigation={navigation}></HeaderBar>
      <View style={{backgroundColor: 'white'}}>
        <FormControl mt='3'l>
          <Input
            maxWidth='90%'
            placeholder='Enter name'
            onChangeText={(value) =>
              setData({ ...formData, description: value })
            }
          />
        </FormControl>
        <FormControl mt='3'>
          <Select
            maxWidth='200'
            accessibilityLabel='Select'
            placeholder='Position'
            mt={1}
          >
            <Select.Item label='Director' value='director' />
            <Select.Item label='Software Architect' value='sofwareArchitect' />
            <Select.Item label='Project Manager' value='PM' />
          </Select>
        </FormControl>
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
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </NativeBaseProvider>
  );
};
