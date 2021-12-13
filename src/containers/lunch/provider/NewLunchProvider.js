import React, { useState, useEffect } from 'react';

import axiosConfig from '../../../core/axiosConfig';

import {
  Button,
  FormControl,
  Input,
  Modal,
  Select,
  Checkbox,
} from 'native-base';

export const NewLunchProvider = ({
  isOpenModal,
  closeModal,
  handleIsRefresh,
}) => {
  const [newData, setNewData] = useState({ has_vegetarian: false });
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (newData.name === undefined) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    // validate() &&
      (async () => {
        try {
          const response = await axiosConfig.post('provider/', newData);
          handleIsRefresh();
          setNewData({});
          closeModal();
        } catch (error) {
          setHasError(true);
          closeModal();
        }
      })();
  };
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>New Provider</Modal.Header>
          <Modal.Body>
            <FormControl isRequire>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setNewData({ ...newData, name: value })
                }
              />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Phone
              </FormControl.Label>
              <Input
                keyboardType='numeric'
                onChangeText={(value) =>
                  setNewData({ ...newData, phone: value })
                }
              />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Budget
              </FormControl.Label>
              <Input
                keyboardType='numeric'
                onChangeText={(value) =>
                  setNewData({ ...newData, budget: value })
                }
              />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Address
              </FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setNewData({ ...newData, address: value })
                }
              />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label _text={{ bold: true }}>Link</FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setNewData({ ...newData, link: value })
                }
              />
            </FormControl>
            <FormControl mt='3' style={{ flexDirection: 'row' }}>
              <FormControl.Label _text={{ bold: true }}>
                Veggie
              </FormControl.Label>
              <Checkbox
                accessibilityLabel="vegetarian"
                isChecked={newData?.has_vegetarian}
                onChange={(value) =>
                  setNewData({ ...newData, has_vegetarian: value })
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
