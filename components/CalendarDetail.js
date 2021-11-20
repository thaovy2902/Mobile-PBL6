import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

export const CalendarDetail = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.calendarDetail]}>
        <View style={styles.calendarType}>
          <Text style={styles.calendarTitle}>Calendar Type</Text>
          <View style={styles.calendarLegend}>
            <View style={styles.calendarLegendItem}> 
              <View style={[styles.calendarLegendBox, styles.outlineBlueBox]}></View>
              <Text style={styles.calendarLegendText}>Off</Text>
            </View>
            <View style={styles.calendarLegendItem}> 
              <View style={[styles.calendarLegendBox, styles.outlineYellowBox]}></View>
              <Text style={styles.calendarLegendText}>Lunch</Text>
            </View>
          </View>
        </View>
        <View style={styles.calendarType}>
          <Text style={styles.calendarTitle}>Today Information</Text>
          <View style={styles.calendarLegend}>
            <View style={styles.calendarLegendItem}> 
              <View style={[styles.calendarLegendBox, styles.fullBlueBox]}></View>
              <Text style={styles.calendarLegendText}>1 - Off</Text>
            </View>
            <View style={styles.calendarLegendItem}> 
              <View style={[styles.calendarLegendBox, styles.fullYellowBox]}></View>
              <Text style={styles.calendarLegendText}>1 - Lunch</Text>
            </View>
            <View style={styles.calendarLegendItem}> 
              <View style={[styles.calendarLegendBox, styles.fullGreenBox]}></View>
              <Text style={styles.calendarLegendText}>0 - Veggie</Text>
            </View>
          </View>
        </View>
        <View style={styles.calendarType}>
          <Text style={styles.calendarTitle}>Description</Text>
          <View style={styles.calendarLegend}>
            <View style={styles.calendarLegendItem}> 
              <View style={[styles.calendarLegendBox, styles.fullPinkBox]}></View>
              <Text style={styles.calendarLegendText}>Holiday</Text>
            </View>
          </View>
        </View>
          <TouchableOpacity style={styles.btnBack}>
            <Text style={styles.btnBackText}>Back to Calendar</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
};
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingRight: SCREEN_WIDTH*0.1,
    paddingLeft: SCREEN_WIDTH*0.1,
  },
  calendarDetail: {
    flexDirection: 'column',
  },
  calendarTitle: {
    textAlign: "center",
    fontSize: SCREEN_WIDTH*0.05,
    color: "white",
    backgroundColor: "#9a9a9a",
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontWeight: 'bold',
    borderRadius: 4,
  },
  calendarLegendItem: {
    flexDirection: "row",
    paddingTop: SCREEN_HEIGHT*0.01,
  },
  calendarLegend: {
    paddingLeft: SCREEN_WIDTH*0.1,
    paddingTop: SCREEN_HEIGHT*0.02,
    paddingBottom: SCREEN_HEIGHT*0.02,
  },
  calendarLegendBox: {
    height: 18,
    width: 18,
    borderRadius: 4
  },
  outlineYellowBox: {
    borderColor: "#ffc87d",
    borderWidth: 3,
  },
  outlineBlueBox: {
    borderColor: "#4da4e0",
    borderWidth: 3,
  },
  fullBlueBox: {
    backgroundColor: "#4da4e0"
  },
  fullYellowBox: {
    backgroundColor: "#ffc87d"
  },
  fullGreenBox: {
    backgroundColor: "#7fc990"
  },
  fullPinkBox: {
    backgroundColor: "#ffbcbc"
  },
  calendarLegendText: {
    paddingLeft: SCREEN_WIDTH*0.02,
  },
  btnBack: {
    backgroundColor: "black",
    textAlign: "center",
    padding: 15,
    marginTop: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnBackText: {
    color: "white",
    fontSize: SCREEN_WIDTH*0.05,
    fontWeight: "bold"
  }
});

