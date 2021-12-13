import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';
import { OptionsButton } from '../../components/OptionsButton';
import { EditGeneralProfile } from './EditGeneralProfile';
import styles from '../../styles/PersonalInformation';
import axiosConfig from '../../core/axiosConfig';

export const GeneralProfile = () => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleIsRefresh = () => {
    setIsRefresh(!isRefresh);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(
          `user/920dba82-17ab-42a5-b270-83b58cc6e413`
        );
        setUser(response.data);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, [isRefresh]);

  return (
    <View style={styles.container}>
      <View style={styles.optionFrame}>
        <OptionsButton title='Edit' openModal={openModal} />
      </View>
      <View style={styles.formFrame}>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Name:</Text>
          <Text style={styles.contentText}>{user?.profile.name}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Email:</Text>
          <Text style={styles.contentText}>{user?.email}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Gender:</Text>
          <Text style={styles.contentText}>
            {(user?.profile.gender === 0 && 'Male') ||
              (user?.profile.gender === 1 && 'Female') ||
              'Other'}
          </Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Join date:</Text>
          <Text style={styles.contentText}>{user?.profile.join_date}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Personal email:</Text>
          <Text style={styles.contentText}>{user?.profile.personal_email}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Phone:</Text>
          <Text style={styles.contentText}>{user?.profile.phone}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Slack ID:</Text>
          <Text style={styles.contentText}>{user?.profile.slack_id}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Title:</Text>
          <Text style={styles.contentText}>{user?.title.title}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.titleText}>Birthday:</Text>
          <Text style={styles.contentText}>{user?.profile.birth_day}</Text>
        </View>
      </View>
      {user !== null && (
        <EditGeneralProfile
          isOpenModal={showModal}
          closeModal={closeModal}
          user={user.profile}
          userTitle={user.title}
          userEmail={user.email}
          id={user.id}
          handleIsRefresh={handleIsRefresh}
        />
      )}
    </View>
  );
};
