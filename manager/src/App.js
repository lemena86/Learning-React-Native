import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCqI4PUyiUTRrqisA2D6wsRfHWO4x75mkE',
      authDomain: 'manager-cedad.firebaseapp.com',
      databaseURL: 'https://manager-cedad.firebaseio.com',
      projectId: 'manager-cedad',
      storageBucket: 'manager-cedad.appspot.com',
      messagingSenderId: '338143810480'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>hello!</Text>
        </View>
      </Provider>
    );
  }
}
