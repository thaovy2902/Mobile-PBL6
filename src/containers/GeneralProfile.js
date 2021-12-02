import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import { Modal, Button, FormControl, Input, Select, Text } from 'native-base';
import { SearchDateBar } from '../components/SearchDateBar';
import { OptionsButton } from '../components/OptionsButton';
import styles from '../styles/PersonalInformation';

export const GeneralProfile = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.optionFrame}>
        <OptionsButton title='Edit' openModal={openModal} />
      </View>
      <View style={styles.formFrame}>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Name:</Text>
          <Text style={styles.contentText}>Dương Thảo Vy</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Email:</Text>
          <Text style={styles.contentText}>102180195@sv1.dut.udn.vn</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Gender:</Text>
          <Text style={styles.contentText}>Female</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Join date:</Text>
          <Text style={styles.contentText}>2021-10-27</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Personal email:</Text>
          <Text style={styles.contentText}>thaovy@gmail.com</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Phone:</Text>
          <Text style={styles.contentText}>No data</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Slack ID:</Text>
          <Text style={styles.contentText}>No data</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Title:</Text>
          <Text style={styles.contentText}>Empty</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Birthday:</Text>
          <Text style={styles.contentText}>No data</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Role:</Text>
          <Text style={styles.contentText}>Member</Text>
        </View>
      </View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>Edit</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Gender</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Male' value='male' />
                <Select.Item label='Female' value='female' />
                <Select.Item label='Other' value='other' />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Join Date</FormControl.Label>
              <SearchDateBar />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Personal Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Phone</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Slack ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Title</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Project Management' value='PM' />
                <Select.Item label='Team Leader' value='TL' />
                <Select.Item label='Developer' value='dev' />
              </Select>
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>BirthDay</FormControl.Label>
              <SearchDateBar />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Set Role</FormControl.Label>
              <Select
                minWidth='200'
                accessibilityLabel='Select'
                placeholder='Select'
                mt={1}
              >
                <Select.Item label='Member' value='member' />
                <Select.Item label='Superadmin' value='superadmin' />
              </Select>
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
                Edit
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};
