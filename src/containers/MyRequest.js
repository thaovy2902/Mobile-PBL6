import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import { Modal, Button, FormControl, Input, Select } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RequestListForm } from '../components/RequestListForm';
import { SearchDateBar } from '../components/SearchDateBar';

export const MyRequest = ({}) => {
  tableHead = ['List Date Off', 'Type Off', 'Reason'];
  tableData = [
    ['2021-10-25 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-28 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-29 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-30 (All day)', 'Sick Leave', 'Sick'],
  ];
  widthArr = [180, 120, 70];

  const [showModal, setShowModal] = useState(false);
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
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Add
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
