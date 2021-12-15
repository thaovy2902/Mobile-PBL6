import * as React from 'react';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { View, ScrollView, TouchableOpacity, Alert, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FormControl, Input, NativeBaseProvider, Select } from 'native-base';
import axiosConfig from '../../core/axiosConfig';
import HeaderBar from '../../components/Header';
import styles from '../../styles/LeaveTypesGroup';

export const TeamProfile = ({ route, navigation }) => {
  tableHead = ['Member Name', 'Member Email', 'Phone', 'Action'];
  widthArr = [200, 200, 110, 130];

  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);

  const authState = useSelector((state) => state.authReducer);

  const id = route.params.id;

  const tableData = data?.employee_list.map((item) => [
    item.name,
    item.email,
    item.phone,
    `Team ${item.title}`,
  ]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(`team/${id}`);
        setData(response.data);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);

  return (
    <NativeBaseProvider>
      <HeaderBar
        title={data?.team_name}
        navigation={navigation}
        backNavigate='Employee'
      />
      <View style={styles.container}>
        {authState.isAdmin && (
          <View
            style={{
              backgroundColor: '#4da4e0',
              width: 130,
            }}
          >
            <Button
              leftIcon={<Icon name='plus' size={15} color='white' />}
              //onPress={openModalNew}
              _text={{
                color: '#fff',
              }}
              variant='unstyled'
            >
              Add Member
            </Button>
          </View>
        )}
        <View style={[styles.list]}>
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
        </View>
      </View>
    </NativeBaseProvider>
  );
};
