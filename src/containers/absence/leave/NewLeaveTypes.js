import React from 'react';

import {
  Button,
  FormControl,
  Input,
  Modal,
  Select,
  Checkbox,
} from 'native-base';

export const NewLeaveTypes = ({ isOpenModal, closeModal }) => {
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
          <Modal.Header>New Leave Types</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
              <Input
                onChangeText={(value) => setData({ ...formData, name: value })}
              />
              {/* {'name' in errors ? (
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: 'xs',
                    color: 'error.500',
                    fontWeight: 500,
                  }}
                >
                  Field is required
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText _text={{ fontSize: 'xs' }}>
                  Field is required
                </FormControl.HelperText>
              )} */}
            </FormControl>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label _text={{ bold: true }}>
                Group
              </FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
                onChangeText={(value) => setData({ ...formData, group: value })}
              >
                <Select.Item label='Paid by Business' value='businessPay' />
                <Select.Item
                  label='Paid by Social Insurance'
                  value='insurancePay'
                />
                <Select.Item label='Unpaid Leave' value='unpaidLeave' />
              </Select>
            </FormControl>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label _text={{ bold: true }}>
                Limit Days
              </FormControl.Label>
              <Input
                type='number'
                onChangeText={(value) =>
                  setData({ ...formData, limitDays: value })
                }
              />
            </FormControl>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label _text={{ bold: true }}>
                Description
              </FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setData({ ...formData, description: value })
                }
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Is Count?</FormControl.Label>
              <Checkbox>Count Day Leave</Checkbox>
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
