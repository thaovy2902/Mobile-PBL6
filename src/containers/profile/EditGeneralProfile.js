import React, { useState, useEffect } from 'react';

import { Button, FormControl, Select, Modal, Input } from 'native-base';
import DatePicker from 'react-native-datepicker';
import axiosConfig from '../../core/axiosConfig';

export const EditGeneralProfile = ({
  isOpenModal,
  closeModal,
  id,
  handleIsRefresh,
}) => {
  const [newData, setNewData] = useState(null);
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (newData.name === undefined) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() &&
      (async () => {
        try {
          const response = await axiosConfig.put(`user/profile/${id}`, newData);
          handleIsRefresh();
          closeModal();
        } catch (error) {
          setHasError(true);
          closeModal();
        }
      })();
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(`user/profile/${id}`);
        setNewData(response);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, [id]);

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal} size='xl'>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={newData?.name}
                onChangeText={(value) =>
                  setNewData({ ...newData, name: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={newData?.email}
                onChangeText={(value) =>
                  setNewData({ ...newData, email: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Gender</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Male' value='male' />
                <Select.Item label='Female' value='female' />
                <Select.Item label='Other' value='other' />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Join Date</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={newData?.join_date}
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
                onDateChange={(date) =>
                  setNewData({ ...newData, join_date: date })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Personal Email</FormControl.Label>
              <Input
                value={newData?.personal_email}
                onChangeText={(value) =>
                  setNewData({ ...newData, personal_email: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Phone</FormControl.Label>
              <Input
                value={newData?.phone}
                onChangeText={(value) =>
                  setNewData({ ...newData, phone: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Slack ID</FormControl.Label>
              <Input
                value={newData?.slack_id}
                onChangeText={(value) =>
                  setNewData({ ...newData, slack_id: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Title</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Project Management' value='PM' />
                <Select.Item label='Team Leader' value='TL' />
                <Select.Item label='Developer' value='dev' />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>BirthDay</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={newData?.birth_day}
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
                onDateChange={(date) =>
                  setNewData({ ...newData, birth_day: date })
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
              <Button onPress={onSubmit}>Edit</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
