import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import styles from './styles';
import { Card, CardSection, Button, Input } from '../common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress}>Log in</Button>
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </Card>
    );
  }
}

export default LoginForm;
