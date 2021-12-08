import React, { useState, useEffect } from 'react';

import { View, ScrollView, TouchableOpacity, Alert, Text } from 'react-native';
import {
  Button,
  FormControl,
  Input,
  Modal,
  Checkbox,
  Select,
} from 'native-base';
import styles from '../../styles/PersonalInformation';

export const EmployeeProfile = ({ isOpenModal, closeModal, item }) => {
  const [newData, setNewData] = useState(null);

  useEffect(() => {
    setNewData(item);
  }, [item]);

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal} size='xl'>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Personal Information</Modal.Header>
          <Modal.Body>
            <View>
              <View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Name:</Text>
                  <Text style={styles.contentText}>
                    {newData?.profile.name}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Email:</Text>
                  <Text style={styles.contentText}>{newData?.email}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Gender:</Text>
                  <Text style={styles.contentText}>
                    {newData?.profile.gender ? 'Female' : 'Male'}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Join date:</Text>
                  <Text style={styles.contentText}>
                    {newData?.profile.join_date}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Personal email:</Text>
                  <Text style={styles.contentText}>
                    {newData?.profile.personal_email}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Phone:</Text>
                  <Text style={styles.contentText}>
                    {newData?.profile.phone}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Slack ID:</Text>
                  <Text style={styles.contentText}>
                    {newData?.profile.slack_id}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Title:</Text>
                  <Text style={styles.contentText}>
                    {newData?.title?.title}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.titleText}>Birthday:</Text>
                  <Text style={styles.contentText}>
                    {newData?.profile.birth_day}
                  </Text>
                </View>
              </View>
            </View>
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
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
