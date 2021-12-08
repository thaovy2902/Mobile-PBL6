import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    marginTop: 60,
    paddingRight: SCREEN_WIDTH * 0.1,
    paddingLeft: SCREEN_WIDTH * 0.1,
  },
  calendarDetail: {
    flexDirection: 'column',
  },
  calendarTitle: {
    textAlign: 'center',
    fontSize: SCREEN_WIDTH * 0.04,
    color: 'white',
    backgroundColor: '#9a9a9a',
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: '#000',
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
  calendarRedTitle: {
    backgroundColor: '#e04d4d',
  },
  calendarOrangeTitle: {
    backgroundColor: '#e89761',
    marginTop: 10,
  },
  calendarLegendItem: {
    flexDirection: 'row',
    paddingTop: SCREEN_HEIGHT * 0.01,
  },
  calendarLegend: {
    paddingLeft: SCREEN_WIDTH * 0.1,
    paddingTop: SCREEN_HEIGHT * 0.02,
    paddingBottom: SCREEN_HEIGHT * 0.02,
  },
  calendarLegendBox: {
    height: 18,
    width: 18,
    borderRadius: 4,
  },
  outlineYellowBox: {
    borderColor: '#ffc87d',
    borderWidth: 3,
  },
  outlineBlueBox: {
    borderColor: '#4da4e0',
    borderWidth: 3,
  },
  outlineGreenBox: {
    borderColor: '#7fc990',
    borderWidth: 3,
  },
  fullBlueBox: {
    backgroundColor: '#4da4e0',
  },
  fullYellowBox: {
    backgroundColor: '#ffc87d',
  },
  fullGreenBox: {
    backgroundColor: '#7fc990',
  },
  fullPinkBox: {
    backgroundColor: '#ffbcbc',
  },
  calendarLegendText: {
    paddingLeft: SCREEN_WIDTH * 0.02,
  },
  btnBack: {
    backgroundColor: '#4da4e0',
    textAlign: 'center',
    padding: 15,
    marginTop: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnBackText: {
    color: 'white',
    fontSize: SCREEN_WIDTH * 0.04,
    fontWeight: 'bold',
  },
});
