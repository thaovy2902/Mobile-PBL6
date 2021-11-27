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
    marginBottom: 20,
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
  forgotSection: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotButton: {
    fontSize: SCREEN_WIDTH * 0.04,
    color: '#fff',
  },
  loginBtn: {
    width: '40%',
    borderRadius: 25,
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
    marginBottom: 20,
  },
  loginButtonSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    fontSize: SCREEN_WIDTH * 0.04,
  },
  frame: {
    opacity: 0.9,
    width: '100%',
    height: 330,
  },
  welcome: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    width: '100%',
    marginBottom: SCREEN_HEIGHT * 0.04,
  },
  loginText: {
    color: '#4da4e0',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
    paddingTop: 5,
  },
  errorText: {
    textAlign: 'center',
    color: '#dc3545',
    fontSize: 14,
  }
});
