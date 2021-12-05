import React from 'react';

import { Button, FormControl, Input, Modal, Select } from 'native-base';
import { SearchDateBar } from '../../../components/SearchDateBar';

export const NewMyRequest = ({ isOpenModal, closeModal }) => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: 'Field is required',
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
    closeModal();
  };
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>New Request</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Available leave days</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>From</FormControl.Label>
              <SearchDateBar />
              <FormControl.Label>To</FormControl.Label>
              <SearchDateBar />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Types</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item
                  label='Annual Leave (max: 12 days)'
                  value='annualLeave'
                />
                <Select.Item
                  label='The Employee Marriage (max: 3 days)'
                  value='employeeMarriage'
                />
                <Select.Item
                  label='Marriage of Employees children (max: 1 days)'
                  value='employeeChildrenMarriage'
                />
                <Select.Item
                  label='Funeral Leave (max: 3 days)'
                  value='funeralLeave'
                />
                <Select.Item
                  label='Maternity Leave (max: 1 days)'
                  value='maternityLeave'
                />
                <Select.Item
                  label='Sick Leave (max: 5 days)'
                  value='sickLeave'
                />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Reason</FormControl.Label>
              <Input />
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
