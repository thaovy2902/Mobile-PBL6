import React, { useState, useEffect } from 'react';

import { Button, FormControl, Input, Modal, Checkbox } from 'native-base';
import axiosConfig from '../../../../core/axiosConfig';

export const NewLeaveTypesGroup = ({
  isOpenModal,
  closeModal,
  handleIsRefresh,
}) => {
  const [newData, setNewData] = useState({
    name: '',
    is_company_pay: false,
    is_insurance_pay: false,
  });
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
          const response = await axiosConfig.post(
            'workday/admin/group-leave-types',
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

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>New Leave Group Types</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
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
              <Button onPress={onSubmit}>Add</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
