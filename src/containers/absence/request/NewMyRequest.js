import React, { useState, useEffect } from 'react';

import axiosConfig from '../../../core/axiosConfig';

import { Button, FormControl, Input, Modal, Select, Text } from 'native-base';
import DatePicker from 'react-native-datepicker';

export const NewMyRequest = ({ isOpenModal, closeModal, handleIsRefresh }) => {
  const [newData, setNewData] = React.useState({});
  const [leaveTypes, setLeaveTypes] = useState(null);
  const [leaveDays, setLeaveDays] = useState(null);
  const [totalTypeOffDays, setTotalTypeOffDays] = useState(null);
  const [typeOff, setTypeOff] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [hasError, setHasError] = React.useState(false);

  const validate = () => {
    if (newData.name === undefined) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
    closeModal();
  };

  useEffect(() => {
    (async () => {
      try {
        const response2 = await axiosConfig.get(
          `workday/request-off/total_off_by_types?profile=432e94fa-bc1c-4049-acf0-96c4152b7487&leave_type=${typeOff}&year=2021`
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
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>New Request</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input isReadOnly value='Duong Thao Vy' />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Available leave days</FormControl.Label>
              <Input isReadOnly value={leaveDays} />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>From</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={dateStart}
                placeholder='Select date'
                confirmBtnText='Confirm'
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
                onDateChange={(date) => setDateStart(date)}
              />
              <FormControl.Label>To</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={dateEnd}
                placeholder='Select date'
                confirmBtnText='Confirm'
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
                onDateChange={(date) => setDateEnd(date)}
              />
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
                  setNewData({ ...newData, leave_type: value });
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
              <FormControl.Label>Reason</FormControl.Label>
              <Input
                value={newData?.reason}
                onValueChange={(value) => {
                  setNewData({ ...newData, reason: value });
                }}
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
