import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'native-base';
import { LeaveTypesList } from '../../../components/LeaveTypesList';
import { NewLeaveTypesGroup } from './NewLeaveTypesGroup';

export const LeaveTypesGroup = () => {
  tableHead = ['Name', 'Pay Choices', 'Actions'];
  tableData = [
    ['Paid by Business', 'Company Pays', ''],
    ['Paid by Social Insurance', 'Insurance Pays', ''],
    ['Unpaid Leave', '', ''],
  ];
  widthArr = [120, 180, 70];

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
        <NewLeaveTypesGroup isOpenModal={showModal} closeModal={closeModal} />
      </View>
      <LeaveTypesList
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
