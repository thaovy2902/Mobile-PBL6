import React, { useState, useEffect } from 'react';

import { Button, FormControl, Input, Modal, Checkbox } from 'native-base';
import axiosConfig from '../../../core/axiosConfig';

export const EditLunchProvider = ({
  isOpenModal,
  closeModal,
  item,
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
          const response = await axiosConfig.put(
            `provider/${item.id}`,
            newData
          );
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

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>Edit Provider</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                value={newData?.name}
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
                value={newData?.phone}
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
                value={newData?.budget}
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
                value={newData?.address}
                onChangeText={(value) =>
                  setNewData({ ...newData, address: value })
                }
              />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label _text={{ bold: true }}>Link</FormControl.Label>
              <Input
                value={newData?.link}
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
              <Button onPress={onSubmit}>Edit</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
