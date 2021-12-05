import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import { Modal, Button, FormControl, Input } from 'native-base';
import { OptionsButton } from '../../components/OptionsButton';
import { RequestListForm } from '../../components/RequestListForm';
import styles from '../../styles/PersonalInformation';

export const PersonalEducation = ({}) => {
  tableHead = ['School', 'Degree', 'Major', 'Graduation in', 'Notes', 'Action'];
  tableData = [['DUT', 'Bachelor of Science', 'IT', '2022', '', '']];
  widthArr = [100, 120, 70, 120, 100, 80];

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
              <FormControl.Label>School Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label>Degree</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3' isRequired>
              <FormControl.Label>Major</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Graduated Year</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Notes</FormControl.Label>
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
