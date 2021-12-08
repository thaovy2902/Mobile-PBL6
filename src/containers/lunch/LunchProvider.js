import React, { useState } from 'react';

import { View } from 'react-native';
import { RequestListForm } from '../../components/RequestListForm';
import { SearchTextBar } from '../../components/SearchTextBar';
import { OptionsButton } from '../../components/OptionsButton';
import { NewLunchProvider } from './NewLunchProvider';
import styles from '../../styles/LunchProvider';

export const LunchProvider = () => {
  tableHead = ['Name', 'Phone', 'Budget'];
  tableData = [
    ['Admin', '0909090909', 'ABC'],
    ['Admin', '0808080808', 'ABC'],
    ['Admin', '0909090909', 'ABC'],
    ['Admin', '0909090909', 'ABC'],
  ];
  widthArr = [160, 130, 90];

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
          <SearchTextBar />
          <OptionsButton title='Add' openModal={openModal} />
        </View>
        <NewLunchProvider isOpenModal={showModal} closeModal={closeModal} />
      </View>
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
