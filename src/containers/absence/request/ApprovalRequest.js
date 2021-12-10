import React, { useState, useEffect } from 'react';

import { View, ScrollView, TouchableOpacity, Alert, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axiosConfig from '../../../core/axiosConfig';
import styles from '../../../styles/LeaveTypesGroup';
import { ActionRequestOff } from './ActionRequestOff';

export const ApprovalRequest = () => {
  tableHead = ['Employee', 'Date Off', 'Leave Type', 'Reason', 'Action'];
  widthArr = [140, 200, 100, 100, 100];

  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [requestID, setRequestID] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);
  const [isRefresh, setIsRefresh] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id, status) => {
    setRequestID(id);
    setRequestStatus(status);
    setShowModal(true);
  };

  const handleIsRefresh = () => {
    setIsRefresh(!isRefresh);
  };

  const statusBg = (status) => {
    if (status === 'Cancel') {
      return '#f56c6c';
    } else if (status === 'Approved') {
      return '#67c23a';
    }
  };

  const actionsBtn = (status, id) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {status !== null && (
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
      )}
      {status === null && (
        <>
          <TouchableOpacity onPress={() => handleOpenModal(id, 'Approved')}>
            <Icon name='check' size={30} color='#4da4e0' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOpenModal(id, 'Rejected')}>
            <Icon name='times' size={30} color='#f56c6c' />
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  const tableData = data?.map((item) => [
    item.request_off.profile.name,
    item.request_off.date_off
      .map((item) => `${item.date} (${item.type})`)
      .join('\n'),
    item.request_off.leave_type.name,
    item.request_off.reason,
    actionsBtn(item.status, item.request_off.id),
  ]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(
          `workday/request/management/get_request_detail?year=2021`
        );
        setData(response.data);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, [isRefresh]);
  return (
    <View style={styles.container}>
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
        {requestID !== null && requestStatus !== null && (
          <ActionRequestOff
            isOpenModal={showModal}
            closeModal={closeModal}
            handleIsRefresh={handleIsRefresh}
            action={requestStatus}
            id={requestID}
          />
        )}
      </View>
    </View>
  );
};
