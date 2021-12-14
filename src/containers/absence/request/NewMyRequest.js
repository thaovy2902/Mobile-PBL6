import React, { useState, useEffect } from 'react';

import axiosConfig from '../../../core/axiosConfig';

import {
  Button,
  FormControl,
  Input,
  Modal,
  Select,
  Text,
  View,
  ScrollView,
  Checkbox,
} from 'native-base';
import { Table, Row } from 'react-native-table-component';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import styles from '../../../styles/LeaveTypesGroup';

export const NewMyRequest = ({ isOpenModal, closeModal, handleIsRefresh }) => {
  const tableHead = ['date', 'Session', 'Lunch'];
  const widthArr = [120, 150, 70];

  const [newData, setNewData] = React.useState({ reason: '' });
  const [reason, setReason] = useState('');
  const [leaveTypes, setLeaveTypes] = useState(null);
  const [leaveDays, setLeaveDays] = useState(null);
  const [totalTypeOffDays, setTotalTypeOffDays] = useState(null);
  const [typeOff, setTypeOff] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [diffDays, setDiffDays] = useState([]);
  const [dateInfo, setDateInfo] = useState([]);
  const [totalLeaves, setTotalLeaves] = useState(0);
  const [hasError, setHasError] = React.useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [name, setName] = useState(null);
  const [id, setID] = useState(null);

  const validate = () => {
    if (newData.name === undefined) {
      return false;
    }
    return true;
  };

  const handleType = (morning, afternoon) => {
    if (morning && afternoon) {
      return 'All day';
    } else if (morning && !afternoon) {
      return '08:00-12:00';
    } else {
      return '13:30-17:30';
    }
  };
  const onSubmit = () => {
    (async () => {
      try {
        let date = [...newData.date];
        setDateInfo(date);
        const response1 = await axiosConfig.post('workday/request-off', {
          ...newData,
          date: date.map((item) => ({
            ...item,
            type: handleType(item.offMorning, item.offAfternoon),
          })),
        });
        handleIsRefresh();
        closeModal();
        setNewData({ reason: '', type_id: '' });
        setTypeOff(null);
        setDateStart(null);
        setDateEnd(null);
        setTotalTypeOffDays(null);
      } catch (error) {
        setHasError(true);
        closeModal();
      }
    })();
  };
  useEffect(() => {
    const start = moment(dateStart);
    const end = moment(dateEnd);
    const arr = [start.format('YYYY-MM-DD')];
    const diff = end.diff(start, 'days') - 1;
    if (diff >= 1) {
      for (let i = 0; i < diff; i++) {
        arr.push(start.add(1, 'days').format('YYYY-MM-DD'));
      }
      arr.push(end.format('YYYY-MM-DD'));
    } else if (diff === 0) {
      arr.push(end.format('YYYY-MM-DD'));
    }
    setDiffDays(arr);
    setDateInfo(
      arr.map((item) => ({
        date: item,
        lunch: false,
        offAfternoon: true,
        offMorning: true,
        type: 'All day',
      }))
    );
    setNewData({
      ...newData,
      date: arr.map((item) => ({
        date: item,
        lunch: false,
        offAfternoon: true,
        offMorning: true,
        type: 'All day',
      })),
      total_leaves: arr.length,
    });
    setTotalLeaves(arr.length);
  }, [dateStart, dateEnd]);

  const lunchCheck = (index) => (
    <View style={{ alignItems: 'center' }}>
      <Checkbox
        isChecked={dateInfo[index]?.lunch}
        onChange={(value) => {
          let date = [...dateInfo];
          date[index] = { ...date[index], lunch: value };
          setDateInfo(date);
          setNewData({ ...newData, date: date });
        }}
      ></Checkbox>
    </View>
  );

  const sessionCheck = (index) => (
    <View style={{ alignItems: 'center' }}>
      <Checkbox
        isChecked={dateInfo[index]?.offMorning}
        onChange={(value) => {
          let date = [...dateInfo];
          date[index] = { ...date[index], offMorning: value };
          setDateInfo(date);
          if (!value) {
            setTotalLeaves(totalLeaves - 0.5);
            setNewData({
              ...newData,
              total_leaves: totalLeaves - 0.5,
              date: date,
            });
          } else {
            setTotalLeaves(totalLeaves + 0.5);
            setNewData({
              ...newData,
              total_leaves: totalLeaves + 0.5,
              date: date,
            });
          }
        }}
      >
        08:00 - 12:00
      </Checkbox>
      <Checkbox
        isChecked={dateInfo[index]?.offAfternoon}
        onChange={(value) => {
          let date = [...dateInfo];
          date[index] = { ...date[index], offAfternoon: value };
          setDateInfo(date);
          if (!value) {
            setTotalLeaves(totalLeaves - 0.5);
            setNewData({
              ...newData,
              total_leaves: totalLeaves - 0.5,
              date: date,
            });
          } else {
            setTotalLeaves(totalLeaves + 0.5);
            setNewData({
              ...newData,
              total_leaves: totalLeaves + 0.5,
              date: date,
            });
          }
        }}
      >
        13:30 - 17:30
      </Checkbox>
    </View>
  );

  const tableData = [];
  diffDays?.map((item, index) =>
    tableData.push([item, sessionCheck(index), lunchCheck(index)])
  );

  useEffect(() => {
    (async () => {
      try {
        const response2 = await axiosConfig.get(
          `workday/request-off/total_off_by_types?profile=${id}&leave_type=${typeOff}&year=2021`
        );
        setTotalTypeOffDays(response2.data.total_leaves);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, [typeOff]);

  useEffect(() => {
    (async () => {
      try {
        const response1 = await axiosConfig.get(
          'workday/remain-leave/retrieve_date'
        );
        setLeaveDays(response1.data.current_days_off.toString());
        setID(response1.data.profile.id);
        setName(response1.data.profile.name);
      } catch (error) {
        setHasError(true);
      }
    })();
    (async () => {
      try {
        const response = await axiosConfig.get('workday/admin/leave-types');
        setLeaveTypes(response.data);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal} size='xl'>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>New Request</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input isReadOnly value={name} />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Available leave days</FormControl.Label>
              <Input isReadOnly value={leaveDays} />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Types</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
                fontSize='md'
                onValueChange={(value) => {
                  setNewData({ ...newData, type_id: value });
                  setTypeOff(value);
                }}
                selectedValue={typeOff}
              >
                {leaveTypes &&
                  leaveTypes?.map((item) => (
                    <Select.Item
                      label={`${item?.name} (maximum: ${item?.days} days)`}
                      value={item?.id}
                      key={item?.id}
                    />
                  ))}
              </Select>
              {totalTypeOffDays !== null && (
                <Text>
                  You have {totalTypeOffDays} date off using this request
                </Text>
              )}
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>From</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={dateStart}
                placeholder='Select date'
                confirmBtnText='Confirm'
                disabled={!!!typeOff}
                cancelBtnText='Cancel'
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                  },
                  dateInput: {
                    marginLeft: 50,
                  },
                }}
                onDateChange={(date) => {
                  setDateStart(date);
                }}
              />
              <FormControl.Label>To</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={dateEnd}
                minDate={dateStart}
                placeholder='Select date'
                confirmBtnText='Confirm'
                disabled={!!!dateStart}
                cancelBtnText='Cancel'
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                  },
                  dateInput: {
                    marginLeft: 50,
                  },
                }}
                onDateChange={(date) => {
                  setDateEnd(date);
                }}
              />
              {dateStart && dateEnd && (
                <View style={styles.listNewRequest}>
                  <ScrollView horizontal={true}>
                    <View>
                      <Table
                        borderStyle={{ borderWidth: 1, borderColor: '#4da4e0' }}
                      >
                        <Row
                          data={tableHead}
                          widthArr={widthArr}
                          style={styles.header}
                          textStyle={styles.textHead}
                        />
                      </Table>
                      <ScrollView style={styles.dataWrapper}>
                        <Table
                          borderStyle={{
                            borderWidth: 1,
                            borderColor: '#4da4e0',
                          }}
                        >
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
                  <Text>Total Leave Days : {totalLeaves}</Text>
                </View>
              )}
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Reason</FormControl.Label>
              <Input
                value={newData?.reason}
                onChangeText={(value) =>
                  setNewData({ ...newData, reason: value })
                }
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant='ghost'
                colorScheme='blueGray'
                onPress={closeModal}
              >
                Cancel
              </Button>
              <Button onPress={onSubmit}>Add</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
