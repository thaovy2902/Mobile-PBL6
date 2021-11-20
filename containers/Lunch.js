import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Tab, TabView } from 'react-native-elements';
import styles from '../styles/CompanyCalendar';
import Header from './Header';
export const Lunch = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Header title="Lunch Management" navigation={navigation}></Header>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item
          title="Meal"
          titleStyle={{
            textTransform: 'capitalize',
            fontSize: 16,
            color: '#000000',
            fontWeight: "bold"
          }}
          containerStyle={{ height: 50, backgroundColor: '#ffffff' }}
        />
        <Tab.Item
          title="Schedule"
          titleStyle={{
            textTransform: 'capitalize',
            fontSize: 16,
            color: '#000000',
            fontWeight: "bold"
          }}
          containerStyle={{ height: 50, backgroundColor: '#ffffff' }}
        />
        <Tab.Item
          title="Provider"
          titleStyle={{
            textTransform: 'capitalize',
            fontSize: 16,
            color: '#000000',
            fontWeight: "bold"
          }}
          containerStyle={{ height: 50, backgroundColor: '#ffffff' }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item>
          <Text>Meal</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>Schedule</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>Provider</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};
