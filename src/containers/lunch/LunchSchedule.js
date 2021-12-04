import React, { useState } from 'react';

import { View } from 'react-native';
import { RequestListForm } from '../../components/RequestListForm';
import { SearchDateBar } from '../../components/SearchDateBar';
import { OptionsButton } from '../../components/OptionsButton';
import { NewLunchSchedule } from './NewLunchSchedule';
import styles from '../../styles/LunchSchedule';

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
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <View style={styles.frameHeader}>
        <View style={styles.searchFrame}>
          <SearchDateBar />
          <OptionsButton title='Add' openModal={openModal} />
        </View>
        <NewLunchSchedule isOpenModal={showModal} closeModal={closeModal} />
      </View>
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
