import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FormControl, Input, Modal, Button, Checkbox } from 'native-base';
import { LeaveTypesList } from '../components/LeaveTypesList';

export const LeaveTypesGroup = () => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [showModal, setShowModal] = useState(false);
  tableHead = ['Name', 'Pay Choices', 'Actions'];
  tableData = [
    ['Paid by Business', 'Company Pays', ''],
    ['Paid by Social Insurance', 'Insurance Pays', ''],
    ['Unpaid Leave', '', ''],
  ];
  widthArr = [120, 180, 70];

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
    setShowModal(false);
  };

  return (
    <>
      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{
            backgroundColor: '#4da4e0',
            width: 50,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Button
            leftIcon={<Icon name='plus' size={15} color='white' />}
            onPress={() => setShowModal(true)}
            variant='unstyled'
          />
        </View>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth='500px'>
            <Modal.CloseButton />
            <Modal.Header>New Leave Types</Modal.Header>
            <Modal.Body>
              <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label _text={{ bold: true }}>
                  Name
                </FormControl.Label>
                <Input
                  onChangeText={(value) =>
                    setData({ ...formData, description: value })
                  }
                />
                {'name' in errors ? (
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
                )}
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
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onPress={onSubmit}>Add More</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
      <LeaveTypesList
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
