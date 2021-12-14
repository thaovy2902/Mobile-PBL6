import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../redux/actions/authAction';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/Login';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authReducer);

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassWord');
  };
  const onLoggedIn = () => {
    dispatch(actions.fetchLogin(email, password));
  };

  useEffect(() => {
    dispatch(actions.resetAuth());
  }, []);

  useEffect(() => {
    console.log(authState.error);
    if (authState.error) {
      setError(true);
    }
    if (authState.token) {
      setEmail('');
      setPassword('');
      setError(false);
      navigation.navigate('MainMenu');
    }
  }, [authState]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/logo_white.png')}
        />
        <Text style={styles.full}>FULL HOPE</Text>
        <Text style={styles.slogan}>Try hard with more hope!</Text>
      </View>
      <View style={styles.frame}>
        <Text style={styles.welcome}>WELCOME BACK!</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder='Email Address'
            placeholderTextColor='#868686'
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder='Password'
            placeholderTextColor='#868686'
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        {error && (
          <Text style={styles.errorText}>Invalid email or password</Text>
        )}
        <View style={styles.loginButtonSection}>
          <TouchableOpacity style={styles.loginBtn} onPress={onLoggedIn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.forgotSection}>
          <TouchableOpacity onPress={onForgotPassword}>
            <Text style={styles.forgotButton}>Forgotten Account?</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default Login;
