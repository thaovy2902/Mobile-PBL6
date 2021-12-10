import * as React from 'react';
import { useState, useEffect } from 'react';

import { View, ScrollView, TouchableOpacity, Alert, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'native-base';
import axiosConfig from '../../../core/axiosConfig';
import Loader from '../../../components/Loader';
import { NewMyRequest } from './NewMyRequest';
import styles from '../../../styles/LeaveTypesGroup';

export const MyRequest = () => {
  tableHead = ['List Date Off', 'Type Off', 'Reason', 'Total Leaves', 'Status'];
  widthArr = [200, 130, 100, 100, 150];

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const [item, setItem] = useState(null);

  const [showModalNew, setShowModalNew] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const openModalNew = () => {
    setShowModalNew(true);
  };
  const closeModalNew = () => {
    setShowModalNew(false);
  };

  const closeModalEdit = () => {
    setShowModalEdit(false);
  };

  const handleOpenModalEdit = (item) => {
    setItem(item);
    setShowModalEdit(true);
  };

  const handlePressDelete = (id) => {
    Alert.alert('Cancel Request', 'Do you want to cancel this request ?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Confirm', onPress: () => handleDelete(id) },
    ]);
  };
  const handleDelete = (id) => {
    (async () => {
      try {
        const response = await axiosConfig.delete(`/workday/request-off/${id}`);
        handleIsRefresh();
      } catch (error) {
        setHasError(true);
      }
    })();
  };

  const statusBg = (status) => {
    if (status === 'Cancel') {
      return '#f56c6c';
    } else if (status === 'Pending') {
      return '#e6a23c';
    } else {
      return '#67c23a';
    }
  };

  const optionsBtn = (status, id) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        disabled
        style={{
          width: 90,
          borderRadius: '50%',
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: statusBg(status),
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff' }}>{status}</Text>
      </TouchableOpacity>
      {status === 'Pending' && (
        <TouchableOpacity onPress={() => handlePressDelete(id)}>
          <Icon name='trash-alt' size={30} color='#4da4e0' />
        </TouchableOpacity>
      )}
    </View>
  );

  const tableData = data?.map((item) => [
    item.date_off.map((item) => `${item.date} (${item.type})`).join('\n'),
    item.leave_type.name,
    item.reason,
    item.total,
    optionsBtn(item.status, item.id),
  ]);

  const handleIsRefresh = () => {
    setIsRefresh(!isRefresh);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(
          `workday/request-off/list_request_user`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    })();
  }, [isRefresh]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#4da4e0',
            width: 50,
            marginTop: 10,
          }}
        >
          <Button
            leftIcon={<Icon name='plus' size={15} color='white' />}
            onPress={openModalNew}
            variant='unstyled'
          />
        </View>
        <NewMyRequest
          isOpenModal={showModalNew}
          closeModal={closeModalNew}
          handleIsRefresh={handleIsRefresh}
        />
        <View style={styles.list}>
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
    </>
  );
};
