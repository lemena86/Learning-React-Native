import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDllYjD-e3pOQi0f4XuNvZGvWYW_KHr54s',
      authDomain: 'authentication-91d21.firebaseapp.com',
      databaseURL: 'https://authentication-91d21.firebaseio.com',
      projectId: 'authentication-91d21',
      storageBucket: 'authentication-91d21.appspot.com',
      messagingSenderId: '602332983271'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
