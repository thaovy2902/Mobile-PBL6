import * as React from 'react';
import { useState, useEffect } from 'react';

import { View, ScrollView, TouchableOpacity, Alert, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Button } from 'native-base';
import { FormControl, Input, NativeBaseProvider, Select } from 'native-base';
import axiosConfig from '../../core/axiosConfig';
import HeaderBar from '../../components/Header';
import styles from '../../styles/LeaveTypesGroup';
import { EmployeeProfile } from './EmployeeProfile';

export const Employee = ({ navigation }) => {
  tableHead = ['Email', 'Name', 'Position', 'Team'];
  widthArr = [200, 180, 110, 130];

  const [data, setData] = useState([]);

  const [hasError, setHasError] = useState(false);

  const [item, setItem] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (item) => {
    setItem(item);
    setShowModal(true);
  };

  const InfoEmployee = (item) => (
    <Text
      style={{ textAlign: 'center', color: '#4da4e0' }}
      onPress={() => handleOpenModal(item)}
    >
      {item.profile?.name}
    </Text>
  );

  const tableData = data?.map((item) => [
    item.email,
    InfoEmployee(item),
    item.title?.title,
    item.profile.teams.map((item) => item.name),
  ]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(`user/`);
        setData(response.data.results);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);
  return (
    <NativeBaseProvider>
      <HeaderBar
        title='Employee Management'
        navigation={navigation}
        backNavigate='MainMenu'
      />
      {/* <View style={styles.employeeSearch}>
        <FormControl mt='3'>
          <Input size='lg' maxWidth='100%' placeholder='Enter name' />
        </FormControl>
        <View style={styles.employeeSearchCol6}>
          <View style={styles.searchCol6Item}>
            <FormControl mt='3'>
              <Select
                maxWidth='200'
                accessibilityLabel='Select'
                placeholder='Position'
                mt={1}
                fontSize='md'
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
                fontSize='md'
              >
                <Select.Item label='Frontend Develop' value='FE' />
                <Select.Item label='Backend Develop' value='BE' />
                <Select.Item label='HR' value='HR' />
                <Select.Item label='All' value='all' />
              </Select>
            </FormControl>
          </View>
        </View>
      </View> */}
      <View style={[styles.container, styles.list]}>
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
                  <>
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={widthArr}
                      style={[
                        styles.row,
                        index !== 0 && {
                          borderTopColor: '#4da4e0',
                          borderTopWidth: 1,
                        },
                        {
                          borderRightColor: '#4da4e0',
                          borderRightWidth: 1,
                        },
                      ]}
                      textStyle={styles.text}
                    />
                  </>
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
        <EmployeeProfile
          isOpenModal={showModal}
          closeModal={closeModal}
          item={item}
        />
      </View>
    </NativeBaseProvider>
  );
};
