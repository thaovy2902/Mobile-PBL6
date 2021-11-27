import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker'

export const SearchDateBar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
        style={{width: 200, marginTop: 10, backGroundColor: '#ffffff'}}
        mode="date"
        date={date}
        placeholder="search by date"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 10
          },
          dateInput: {
            marginLeft: 46
          }
        }}
        onDateChange={(date) => setDate(date) }
      />
  );
};
