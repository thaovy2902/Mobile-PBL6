import * as React from 'react';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'native-base';
import axiosConfig from '../../../../core/axiosConfig';
import Loader from '../../../../components/Loader';
import { NewLeaveTypes } from './NewLeaveTypes';
import { EditLeaveTypes } from './EditLeaveTypes';
import styles from '../../../../styles/LeaveTypesGroup';

export const LeaveTypes = () => {
  const authState = useSelector((state) => state.authReducer);

  const tableHead = ['Name', 'Limit Days', 'Description', 'Actions'];
  const widthArr = [140, 60, 180, 80];

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
    Alert.alert('Delete', 'Are you sure to delete this?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => handleDelete(id) },
    ]);
  };
  const handleDelete = (id) => {
    (async () => {
      try {
        const response = await axiosConfig.delete(
          `workday/admin/leave-types/${id}`
        );
        handleIsRefresh();
      } catch (error) {
        setHasError(true);
      }
    })();
  };

  const editBtn = (item) => (
    <TouchableOpacity
      key={item}
      style={{ paddingLeft: 10, paddingRight: 10 }}
      onPress={() => handleOpenModalEdit(item)}
    >
      <Icon name='edit' size={24} color='#4da4e0' />
    </TouchableOpacity>
  );
  const deleteBtn = (id) => (
    <TouchableOpacity key={item} onPress={() => handlePressDelete(id)}>
      <Icon name='trash-alt' size={24} color='#4da4e0' />
    </TouchableOpacity>
  );

  const tableData = data?.map((item) => [
    item.name,
    item.days,
    item.descriptions,
    authState.isAdmin ? [editBtn(item), deleteBtn(item.id)] : '',
  ]);

  const handleIsRefresh = () => {
    setIsRefresh(!isRefresh);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(`workday/admin/leave-types`);
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
        {authState.isAdmin && (
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
        )}

        <NewLeaveTypes
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
          <EditLeaveTypes
            isOpenModal={showModalEdit}
            closeModal={closeModalEdit}
            item={item}
            handleIsRefresh={handleIsRefresh}
          />
        </View>
      </View>
    </>
  );
};
