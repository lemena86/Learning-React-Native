import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
