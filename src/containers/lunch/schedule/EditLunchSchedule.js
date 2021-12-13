import React, { useState, useEffect } from 'react';

import {
  Button,
  FormControl,
  Select,
  Modal,
  Checkbox,
  TextArea,
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import axiosConfig from '../../../core/axiosConfig';

export const EditLunchSchedule = ({
  isOpenModal,
  closeModal,
  item,
  handleIsRefresh,
}) => {
  const [newData, setNewData] = useState(null);
  const [provider, setProvider] = useState(null);
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (newData.note === undefined) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() &&
      (async () => {
        try {
          const response = await axiosConfig.put(`lunches/${item.id}`, newData);
          handleIsRefresh();
          closeModal();
        } catch (error) {
          setHasError(true);
          closeModal();
        }
      })();
  };
  useEffect(() => {
    setNewData(item);
  }, [item]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get('provider/');
        setProvider(response.data);
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
          <Modal.Header>Edit Schedule</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>Date</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: 'transparent' }}
                mode='date'
                date={newData?.date}
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
                onDateChange={(date) => setNewData({ ...newData, date: date })}
              />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Provider
              </FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
                fontSize='md'
                value={newData?.name_provider}
                onValueChange={(value) =>
                  setNewData({
                    ...newData,
                    provider: value?.id,
                    name_provider: value?.name,
                  })
                }
              >
                {provider &&
                  provider?.map((item) => (
                    <Select.Item
                      label={item?.name}
                      value={item}
                      key={item?.id}
                    />
                  ))}
              </Select>
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label _text={{ bold: true }}>Note</FormControl.Label>
              <TextArea
                value={newData?.note}
                onChangeText={(value) =>
                  setNewData({ ...newData, note: value })
                }
              />
            </FormControl>
            <FormControl mt='3' style={{ flexDirection: 'row' }}>
              <FormControl.Label _text={{ bold: true }}>
                Veggie
              </FormControl.Label>
              <Checkbox
                isChecked={newData?.has_veggie}
                onChange={(value) =>
                  setNewData({ ...newData, has_veggie: value })
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
