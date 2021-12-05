import * as React from 'react';
import { useState } from 'react';

import { View, Text } from 'react-native';
import { OptionsButton } from '../../components/OptionsButton';
import { EditGeneralProfile } from './EditGeneralProfile';
import styles from '../../styles/PersonalInformation';

export const GeneralProfile = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
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
      <EditGeneralProfile isOpenModal={showModal} closeModal={closeModal} />
    </View>
  );
};
