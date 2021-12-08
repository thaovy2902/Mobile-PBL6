import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  optionFrame: {
    marginBottom: 30,
    marginTop: 10,
  },
  formFrame: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  formGroup: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  titleText: {
    color: '#4da4e0',
    width: 120,
    fontSize: 16,
  },
  contentText: {
    fontWeight: '200',
    fontSize: 16,
  },
});
