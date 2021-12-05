import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RequestListForm } from '../../../components/RequestListForm';
import { NewMyRequest } from './NewMyRequest';

export const MyRequest = ({}) => {
  tableHead = ['List Date Off', 'Type Off', 'Reason'];
  tableData = [
    ['2021-10-25 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-28 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-29 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-30 (All day)', 'Sick Leave', 'Sick'],
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
      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{
            backgroundColor: '#4da4e0',
            width: 50,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Button
            leftIcon={<Icon name='plus' size={15} color='white' />}
            onPress={openModal}
            variant='unstyled'
          />
        </View>
        <NewMyRequest isOpenModal={showModal} closeModal={closeModal} />
      </View>
      <RequestListForm
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
