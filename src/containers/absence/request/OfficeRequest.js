import * as React from 'react';

import { RequestListForm } from '../../../components/RequestListForm';

export const OfficeRequest = () => {
  tableHead = ['Employee', 'List Date Off', 'Type Off'];
  tableData = [
    ['Admin', '2021-10-25 (All day)', 'Sick'],
    ['Admin', '2021-10-25 (All day)', 'Sick'],
    ['Admin', '2021-10-25 (All day)', 'Sick'],
    ['Admin', '2021-10-25 (All day)', 'Sick'],
  ];
  widthArr = [120, 180, 80];
  return (
    <RequestListForm
      tableData={tableData}
      tableHead={tableHead}
      widthArr={widthArr}
    />
  );
};
