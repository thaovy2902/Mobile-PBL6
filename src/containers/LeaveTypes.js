import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
  Modal,
  Button,
  Select,
  Checkbox,
} from 'native-base';
import { LeaveTypesList } from '../components/LeaveTypesList';

export const LeaveTypes = () => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [showModal, setShowModal] = useState(false);
  tableHead = ['Name', 'Limit Days', 'Description'];
  groupData = ['Paid by Business', 'Paid by Social Insurance', 'Unpaid Leave'];
  tableData = [
    ['Annual Leave', '12', 'Nghỉ phép hàng năm, 12 ngày'],
    ['The Employees Marriage', '3', 'Kết hôn của nhân viên'],
    ['Marriage of Employees children', '1', 'Con của nhân viên kết hôn'],
    ['Funeral Leave', '3', 'Tang lễ của cha/mẹ/vợ/chồng/con'],
    ['Maternity Leave', '120', 'Nghỉ sinh con, dành cho mẹ. Thường là 6 tháng'],
    ['Sick Leave', '5', 'Nghỉ do đau ốm'],
    ['Paternity Leave', '5', 'Nghỉ sinh con, dành cho bố'],
    ['Others', '5', 'Trường hợp này nhân viên nhập lý do nghỉ'],
  ];
  widthArr= [140, 50, 180];

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
                    setData({ ...formData, name: value })
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
              <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label _text={{ bold: true }}>
                  Group
                </FormControl.Label>
                <Select
                  minWidth='200'
                  accessibilityLabel='Select'
                  placeholder='Select'
                  mt={1}
                  onChangeText={(value) =>
                    setData({ ...formData, group: value })
                  }
                >
                  <Select.Item label='Paid by Business' value='businessPay' />
                  <Select.Item
                    label='Paid by Social Insurance'
                    value='insurancePay'
                  />
                  <Select.Item label='Unpaid Leave' value='unpaidLeave' />
                </Select>
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
              <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label _text={{ bold: true }}>
                  Description
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
                <FormControl.Label>Is Count?</FormControl.Label>
                <Checkbox>Count Day Leave</Checkbox>
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
