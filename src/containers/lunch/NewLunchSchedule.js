import React from 'react';

import { Button, FormControl, Input, Modal, Select } from 'native-base';
import { CheckBox } from 'react-native';
import { SearchDateBar } from '../../components/SearchDateBar';

export const NewLunchSchedule = ({ isOpenModal, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>New Schedule</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Pick a date</FormControl.Label>
              <SearchDateBar />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Provider</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Jins' value='jins' />
                <Select.Item label='A Tri' value='aTri' />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Note</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3' style={{ flexDirection: 'row' }}>
              <FormControl.Label>Veggie</FormControl.Label>
              <CheckBox />
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
              <Button onPress={closeModal}>Add</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
