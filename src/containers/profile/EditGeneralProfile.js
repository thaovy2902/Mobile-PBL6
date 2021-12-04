import React from 'react';

import { Button, FormControl, Input, Modal, Select } from 'native-base';
import { SearchDateBar } from '../../components/SearchDateBar';

export const EditGeneralProfile = ({ isOpenModal, closeModal }) => {
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
          <Modal.Header>Edit</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Gender</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Male' value='male' />
                <Select.Item label='Female' value='female' />
                <Select.Item label='Other' value='other' />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Join Date</FormControl.Label>
              <SearchDateBar />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Personal Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Phone</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Slack ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Title</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Project Management' value='PM' />
                <Select.Item label='Team Leader' value='TL' />
                <Select.Item label='Developer' value='dev' />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>BirthDay</FormControl.Label>
              <SearchDateBar />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Set Role</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Member' value='member' />
                <Select.Item label='Superadmin' value='superadmin' />
              </Select>
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
