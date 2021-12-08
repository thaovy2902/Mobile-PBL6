import React, { useState, useEffect } from 'react';

import { Button, FormControl, Input, Modal, Checkbox } from 'native-base';
import axioisConfig from '../../../../core/axiosConfig';

export const EditLeaveTypesGroup = ({
  isOpenModal,
  closeModal,
  item,
  handleIsRefresh,
}) => {
  const [newData, setNewData] = useState(null);
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
          const response = await axioisConfig.put(
            `workday/admin/group-leave-types/${item.id}`,
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
          <Modal.Header>Edit Leave Group Types</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                value={newData?.name}
                onChangeText={(value) =>
                  setNewData({ ...newData, name: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Pay Choices</FormControl.Label>
              <Checkbox
                name='is_company_pay'
                isChecked={newData?.is_company_pay}
                onChange={(value) =>
                  setNewData({ ...newData, is_company_pay: value })
                }
              >
                Company Pay
              </Checkbox>
              <Checkbox
                name='is_insurance_pay'
                isChecked={newData?.is_insurance_pay}
                onChange={(value) =>
                  setNewData({ ...newData, is_insurance_pay: value })
                }
              >
                Insurance Pay
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
