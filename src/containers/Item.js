import React from 'react';
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { TouchableOpacity } from 'react-native';

export const Item = React.memo(({items, renderItem, renderEmptyDate}) => {
  return (
    <Agenda
      items={items}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
    />
  );
});
