import React, { useState } from 'react';
import { Text, View, TouchableOpacity, CheckBox } from 'react-native';
import { Modal, Button, FormControl, Input, Select } from 'native-base';
import { RequestListForm } from '../components/RequestListForm';
import { SearchTextBar } from '../components/SearchTextBar';
import styles from '../styles/LunchProvider';

export const LunchProvider = () => {
  tableHead = ['Name', 'Phone', 'Budget'];
  tableData = [
    ['Admin', '0909090909', 'ABC'],
    ['Admin', '0808080808', 'ABC'],
    ['Admin', '0909090909', 'ABC'],
    ['Admin', '0909090909', 'ABC'],
  ];
  widthArr = [180, 120, 70];

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <View style={styles.frameHeader}>
        <SearchTextBar />
        <TouchableOpacity
          style={styles.detailBtn}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.detailText}>Add</Text>
        </TouchableOpacity>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth='500px'>
            <Modal.CloseButton />
            <Modal.Header>New Provider</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt='3'>
                <FormControl.Label>Phone</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt='3'>
                <FormControl.Label>Budget</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt='3'>
                <FormControl.Label>Address</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt='3'>
                <FormControl.Label>Link</FormControl.Label>
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
