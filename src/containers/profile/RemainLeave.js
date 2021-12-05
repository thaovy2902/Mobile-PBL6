import * as React from 'react';
import { useState } from 'react';

import { Button, FormControl, Input, Modal } from 'native-base';
import { View } from 'react-native';
import { OptionsButton } from '../../components/OptionsButton';
import { RequestListForm } from '../../components/RequestListForm';
import styles from '../../styles/PersonalInformation';

export const RemainLeave = ({}) => {
  tableHead = [
    'Year',
    'Remain Last Year',
    'Total This Year',
    'Taken',
    'Left',
    'Action',
  ];
  tableData = [['2021', '0', '12', '0', '12', '']];
  widthArr = [70, 140, 120, 70, 70, 90];

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.optionFrame}>
        <OptionsButton title='Add' openModal={openModal} />
      </View>
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>Add New</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label>Year</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label>Remain Last Year</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label>Total This Year</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label>Left</FormControl.Label>
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
  );
};
