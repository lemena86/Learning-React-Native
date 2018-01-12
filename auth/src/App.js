import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDllYjD-e3pOQi0f4XuNvZGvWYW_KHr54s',
      authDomain: 'authentication-91d21.firebaseapp.com',
      databaseURL: 'https://authentication-91d21.firebaseio.com',
      projectId: 'authentication-91d21',
      storageBucket: 'authentication-91d21.appspot.com',
      messagingSenderId: '602332983271'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
