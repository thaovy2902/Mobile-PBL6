import React from 'react';

import { Agenda } from 'react-native-calendars';

export const Item = React.memo(({ items, renderItem, renderEmptyDate }) => {
  return (
    <Agenda
      items={items}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
    />
  );
});
