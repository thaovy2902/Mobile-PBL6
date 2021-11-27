import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker'

export const SearchDateBar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
        style={{width: 200, backGroundColor: '#ffffff'}}
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
          },
          dateInput: {
            marginLeft: 50
          }
        }}
        onDateChange={(date) => setDate(date) }
      />
  );
};
