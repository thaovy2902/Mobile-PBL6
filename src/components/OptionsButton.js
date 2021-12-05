import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles/OptionsButton';

export const OptionsButton = ({ title, openModal }) => {
  return (
    <TouchableOpacity style={styles.detailBtn} onPress={openModal}>
      <Text style={styles.detailText}>{title}</Text>
    </TouchableOpacity>
  );
};
