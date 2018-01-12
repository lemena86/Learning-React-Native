import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from '../common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  componentWillMount() {}
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
          <Button onPress={() => console.log('on press')}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
