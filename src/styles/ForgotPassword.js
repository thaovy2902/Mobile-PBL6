import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4da4e0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    marginBottom: SCREEN_HEIGHT * 0.1,
    marginTop: -SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_WIDTH * 0.3,
  },
  inputView: {
    borderWidth: 0.5,
    backgroundColor: '#fff',
    width: '80%',
    height: '15%',
    marginLeft: 40,
    alignItems: 'center',
    borderRadius: 24,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  TextInput: {
    flex: 1,
    alignItems: 'center',
    fontStyle: 'normal',
    fontSize: SCREEN_WIDTH * 0.04,
  },
  please: {
    fontSize: 17,
    color: '#fff',
    width: '80%',
    marginLeft: 40,
    marginBottom: 15,
  },
  loginBtn: {
    width: '30%',
    height: '33%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  loginButtonSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  full: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -20,
    fontSize: SCREEN_WIDTH * 0.07,
  },
  slogan: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  frame: {
    opacity: 0.9,
    width: '100%',
    height: 330,
  },
  welcome: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'normal',
    width: '100%',
    marginBottom: SCREEN_HEIGHT * 0.04,
  },
  loginText: {
    color: '#4da4e0',
    fontSize: SCREEN_WIDTH * 0.04,
  },
});
