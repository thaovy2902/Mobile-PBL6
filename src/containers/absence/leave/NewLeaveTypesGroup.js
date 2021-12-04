import React from 'react';

import { Button, FormControl, Input, Modal, Checkbox } from 'native-base';

export const NewLeaveTypesGroup = ({ isOpenModal, closeModal }) => {
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
          <Modal.Header>New Leave Group Types</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setData({ ...formData, description: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Pay Choices</FormControl.Label>
              <Checkbox>Company Pay</Checkbox>
              <Checkbox>Insurance Pay</Checkbox>
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
