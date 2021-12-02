import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import { Modal, Button, FormControl, Input, Text } from 'native-base';
import { OptionsButton } from '../components/OptionsButton';
import styles from '../styles/PersonalInformation';

export const RemainLeave = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.optionFrame}>
        <OptionsButton title='Add' openModal={openModal} />
      </View>
      <View style={styles.formFrame}>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Year:</Text>
          <Text style={styles.contentText}>2021</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Remain Last Year:</Text>
          <Text style={styles.contentText}>0</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Total This Year:</Text>
          <Text style={styles.contentText}>12</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Taken:</Text>
          <Text style={styles.contentText}>0</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Left:</Text>
          <Text style={styles.contentText}>12</Text>
        </View>
      </View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>Add New</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Year</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Remain Last Year</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Total This Year</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
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
