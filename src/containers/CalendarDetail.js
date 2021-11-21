import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/CalenderDetail';

export const CalendarDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.calendarDetail]}>
        <View style={styles.calendarType}>
          <Text style={styles.calendarTitle}>Calendar Type</Text>
          <View style={styles.calendarLegend}>
            <View style={styles.calendarLegendItem}>
              <View
                style={[
                  styles.calendarLegendBox,
                  styles.outlineBlueBox,
                ]}></View>
              <Text style={styles.calendarLegendText}>Off</Text>
            </View>
            <View style={styles.calendarLegendItem}>
              <View
                style={[
                  styles.calendarLegendBox,
                  styles.outlineYellowBox,
                ]}></View>
              <Text style={styles.calendarLegendText}>Lunch</Text>
            </View>
          </View>
        </View>
        <View style={styles.calendarType}>
          <Text style={styles.calendarTitle}>Today Information</Text>
          <View style={styles.calendarLegend}>
            <View style={styles.calendarLegendItem}>
              <View
                style={[styles.calendarLegendBox, styles.fullBlueBox]}></View>
              <Text style={styles.calendarLegendText}>1 - Off</Text>
            </View>
            <View style={styles.calendarLegendItem}>
              <View
                style={[styles.calendarLegendBox, styles.fullYellowBox]}></View>
              <Text style={styles.calendarLegendText}>1 - Lunch</Text>
            </View>
            <View style={styles.calendarLegendItem}>
              <View
                style={[styles.calendarLegendBox, styles.fullGreenBox]}></View>
              <Text style={styles.calendarLegendText}>0 - Veggie</Text>
            </View>
          </View>
        </View>
        <View style={styles.calendarType}>
          <Text style={styles.calendarTitle}>Description</Text>
          <View style={styles.calendarLegend}>
            <View style={styles.calendarLegendItem}>
              <View
                style={[styles.calendarLegendBox, styles.fullPinkBox]}></View>
              <Text style={styles.calendarLegendText}>Holiday</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('Calendar')}>
          <Text style={styles.btnBackText}>Back to Calendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
