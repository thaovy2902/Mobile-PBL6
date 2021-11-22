import * as React from 'react';
import { RequestListForm } from '../components/RequestListForm';

export const MyRequest = () => {
  tableHead = ['List Date Off', 'Type Off', 'Reason'];
  tableData = [
    ['2021-10-25 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-28 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-29 (All day)', 'Sick Leave', 'Sick'],
    ['2021-10-30 (All day)', 'Sick Leave', 'Sick'],
  ];
  widthArr= [180, 120, 70];
  return <RequestListForm tableData={tableData} tableHead={tableHead} widthArr={widthArr} />;
};
