import * as React from 'react';

import { RequestListForm } from '../../../components/RequestListForm';

export const ApprovalRequest = () => {
  tableHead = ['Employee', 'Date Off', 'Leave Type', 'Reason', 'Action'];
  tableData = [
    ['Admin', '2021-10-25 (All day)', 'Sick'],
    ['Admin', '2021-10-25 (All day)', 'Sick'],
    ['Admin', '2021-10-25 (All day)', 'Sick'],
    ['Admin', '2021-10-25 (All day)', 'Sick'],
  ];
  widthArr = [120, 190, 70, 70, 70];
  return (
    <RequestListForm
      tableData={tableData}
      tableHead={tableHead}
      widthArr={widthArr}
    />
  );
};
