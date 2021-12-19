import React, { useState, useEffect } from 'react';

import { Button, FormControl, Select, Modal, Input } from 'native-base';
import DatePicker from 'react-native-datepicker';
import axiosConfig from '../../core/axiosConfig';

export const EditGeneralProfile = ({
  isOpenModal,
  closeModal,
  user,
  userTitle,
  userEmail,
  id,
  handleIsRefresh,
}) => {
  const [data, setData] = useState({
    user: id,
    birth_day: null,
    email: userEmail,
    gender: user.gender,
    id: user.id,
    join_date: user.join_date,
    maximum_level_approved: user.maximum_level_approved,
    name: user.name,
    personal_email: user.personal_email,
    phone: user.phone,
    slack_id: user.slack_id,
    title: { id: userTitle.id, title: userTitle.title },
  });
  const [title, setTitle] = useState(null);
  const [hasError, setHasError] = useState(false);

  const onSubmit = () => {
    (async () => {
      try {
        const response = await axiosConfig.put(`user/profile/${data.id}`, data);
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
        const response = await axiosConfig.get('user/title');
        setTitle(response.data);
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
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={data?.name}
                onChangeText={(value) => setData({ ...data, name: value })}
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={data?.email}
                onChangeText={(value) => {
                  setData({ ...data, email: value });
                }}
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Gender</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
                selectedValue={data?.gender}
                onValueChange={(value) => {
                  setData({
                    ...data,
                    gender: value,
                  });
                }}
              >
                <Select.Item label='Male' value={0} />
                <Select.Item label='Female' value={1} />
                <Select.Item label='Other' value={2} />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Join Date</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={data?.join_date}
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
                onDateChange={(date) => setData({ ...data, join_date: date })}
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Personal Email</FormControl.Label>
              <Input
                value={data?.personal_email}
                onChangeText={(value) =>
                  setData({
                    ...data,
                    personal_email: value,
                  })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Phone</FormControl.Label>
              <Input
                keyboardType='numeric'
                value={data?.phone}
                onChangeText={(value) => setData({ ...data, phone: value })}
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Slack ID</FormControl.Label>
              <Input
                value={data?.slack_id}
                onChangeText={(value) => setData({ ...data, slack_id: value })}
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Title</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
                selectedValue={data?.title}
                onValueChange={(value) => {
                  setData({
                    ...data,
                    title: { id: value.id, title: value.title },
                  });
                }}
              >
                {title?.map((item) => (
                  <Select.Item label={item.title} value={item} key={item.id} />
                ))}
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>BirthDay</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={data?.birth_day !== null ? data?.birth_day : null}
                placeholder='Please input'
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
                  setData({
                    ...data,
                    birth_day: date,
                  })
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
