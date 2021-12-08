import React, { useState, useEffect } from 'react';

import axioisConfig from '../../../../core/axiosConfig';

import {
  Button,
  FormControl,
  Input,
  Modal,
  Select,
  Checkbox,
} from 'native-base';

export const NewLeaveTypes = ({ isOpenModal, closeModal, handleIsRefresh }) => {
  const [newData, setNewData] = useState({ is_count: true });
  const [leaveTypesGroup, setLeaveTypesGroup] = useState(null);
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
          const response = await axioisConfig.post(
            'workday/admin/leave-types',
            newData
          );
          handleIsRefresh();
          setNewData({});
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
        const response = await axioisConfig.get(
          'workday/admin/group-leave-types'
        );
        setLeaveTypesGroup(response.data);
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
          <Modal.Header>New Leave Types</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setNewData({ ...newData, name: value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Group
              </FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
                fontSize='md'
                onValueChange={(value) =>
                  setNewData({ ...newData, leave_type_group: value })
                }
              >
                {leaveTypesGroup &&
                  leaveTypesGroup?.map((item) => (
                    <Select.Item
                      label={item?.name}
                      value={item?.id}
                      key={item?.id}
                    />
                  ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Limit Days
              </FormControl.Label>
              <Input
                type='number'
                onChangeText={(value) =>
                  setNewData({ ...newData, days: value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>
                Description
              </FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setNewData({ ...newData, descriptions: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Is Count?</FormControl.Label>
              <Checkbox
                isChecked={newData?.is_count}
                onChange={(value) =>
                  setNewData({ ...newData, is_count: value })
                }
              >
                Count Day Leave
              </Checkbox>
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
