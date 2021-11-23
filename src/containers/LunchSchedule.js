import React, { useState } from 'react';
import { Text, View, TouchableOpacity, CheckBox } from 'react-native';
import { Modal, Button, FormControl, Input, Select } from 'native-base';
import { RequestListForm } from '../components/RequestListForm';
import { SearchDateBar } from '../components/SearchDateBar';
import styles from '../styles/LunchSchedule';

export const LunchSchedule = () => {
  tableHead = ['Date', 'Provider', 'Note'];
  tableData = [
    ['2021-10-25', 'Admin', 'ABC'],
    ['2021-10-27', 'Admin', 'ABC'],
    ['2021-10-29', 'Admin', 'ABC'],
    ['2021-10-30', 'Admin', 'ABC'],
  ];
  widthArr = [180, 120, 70];

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <View style={styles.frameHeader}>
        <SearchDateBar />
        <TouchableOpacity
          style={styles.detailBtn}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.detailText}>Add</Text>
        </TouchableOpacity>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth='500px'>
            <Modal.CloseButton />
            <Modal.Header>New Schedule</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Pick a date</FormControl.Label>
                <SearchDateBar />
              </FormControl>
              <FormControl mt='3'>
                <FormControl.Label>Provider</FormControl.Label>
                <Select
                  minWidth='200'
                  accessibilityLabel='Select'
                  placeholder='Select'
                  mt={1}
                >
                  <Select.Item label='Jins' value='jins' />
                  <Select.Item label='A Tri' value='aTri' />
                </Select>
              </FormControl>
              <FormControl mt='3'>
                <FormControl.Label>Note</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt='3'>
                <FormControl.Label>Veggie</FormControl.Label>
                <CheckBox />
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
                  Send
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
