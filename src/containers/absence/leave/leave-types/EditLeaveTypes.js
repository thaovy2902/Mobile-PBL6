import React, { useState, useEffect } from 'react';

import {
  Button,
  FormControl,
  Input,
  Modal,
  Checkbox,
  Select,
} from 'native-base';
import axiosConfig from '../../../../core/axiosConfig';

export const EditLeaveTypes = ({
  isOpenModal,
  closeModal,
  item,
  handleIsRefresh,
}) => {
  const [newData, setNewData] = useState(null);
  const [leaveTypesGroup, setLeaveTypesGroup] = useState(null);
  const [errors, setErrors] = React.useState({});
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (newData.name === undefined) {
      setErrors({
        ...errors,
        name: 'Field is required',
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() &&
      (async () => {
        try {
          const response = await axiosConfig.put(
            `workday/admin/leave-types/${item.id}`,
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

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(
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
          <Modal.Header>Edit Leave Types</Modal.Header>
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
                value={newData?.name_type}
                onValueChange={(value) => {
                  setNewData({
                    ...newData,
                    name_type: value.name,
                    leave_type_group: value.id,
                  });
                }}
              >
                {leaveTypesGroup &&
                  leaveTypesGroup?.map((item) => (
                    <Select.Item
                      label={item?.name}
                      value={item}
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
                keyboardType='numeric'
                value={newData?.days.toString()}
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
                value={newData?.descriptions}
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
              <Button onPress={onSubmit}>Edit</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
