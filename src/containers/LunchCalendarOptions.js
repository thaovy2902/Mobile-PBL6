import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import { Checkbox, NativeBaseProvider } from 'native-base';
import styles from '../styles/CalenderDetail';

export const LunchCalendarOptions = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={[styles.calendarDetail]}>
          <View style={styles.calendarType}>
            <TouchableOpacity>
              <Text style={[styles.calendarTitle, styles.calendarRedTitle]}>
                Set Lunch
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.calendarTitle, styles.calendarOrangeTitle]}>
                Cancel Lunch
              </Text>
            </TouchableOpacity>
            <View style={styles.calendarLegend}>
              <View style={styles.calendarLegendItem}>
                <Checkbox
                  style={[styles.calendarLegendBox, styles.outlineBlueBox]}
                >
                  <Text style={styles.calendarLegendText}>Auto Booking</Text>
                </Checkbox>
              </View>
              <View style={styles.calendarLegendItem}>
                <Checkbox
                  style={[styles.calendarLegendBox, styles.outlineGreenBox]}
                >
                  <Text style={styles.calendarLegendText}>Auto Veggie</Text>
                </Checkbox>
              </View>
            </View>
          </View>
          <View style={styles.calendarType}>
            <Text style={styles.calendarTitle}>Description</Text>
            <View style={styles.calendarLegend}>
              <View style={styles.calendarLegendItem}>
                <View
                  style={[styles.calendarLegendBox, styles.fullPinkBox]}
                ></View>
                <Text style={styles.calendarLegendText}>Holiday</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.navigate('Lunch')}
          >
            <Text style={styles.btnBackText}>Back to Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
