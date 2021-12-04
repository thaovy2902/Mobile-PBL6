import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'native-base';
import { LeaveTypesList } from '../../../components/LeaveTypesList';
import { NewLeaveTypes } from './NewLeaveTypes';

export const LeaveTypes = () => {
  tableHead = ['Name', 'Limit Days', 'Description'];
  groupData = ['Paid by Business', 'Paid by Social Insurance', 'Unpaid Leave'];
  tableData = [
    ['Annual Leave', '12', 'Nghỉ phép hàng năm, 12 ngày'],
    ['The Employees Marriage', '3', 'Kết hôn của nhân viên'],
    ['Marriage of Employees children', '1', 'Con của nhân viên kết hôn'],
    ['Funeral Leave', '3', 'Tang lễ của cha/mẹ/vợ/chồng/con'],
    ['Maternity Leave', '120', 'Nghỉ sinh con, dành cho mẹ. Thường là 6 tháng'],
    ['Sick Leave', '5', 'Nghỉ do đau ốm'],
    ['Paternity Leave', '5', 'Nghỉ sinh con, dành cho bố'],
    ['Others', '5', 'Trường hợp này nhân viên nhập lý do nghỉ'],
  ];
  widthArr = [140, 50, 180];

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
        <NewLeaveTypes isOpenModal={showModal} closeModal={closeModal} />
      </View>
      <LeaveTypesList
        tableData={tableData}
        tableHead={tableHead}
        widthArr={widthArr}
      />
    </>
  );
};
