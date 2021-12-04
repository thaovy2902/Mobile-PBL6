import React from 'react';

import { Button, FormControl, Input, Modal } from 'native-base';
import { CheckBox } from 'react-native';

export const NewLunchProvider = ({ isOpenModal, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>New Provider</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Phone</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Budget</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Address</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Link</FormControl.Label>
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
