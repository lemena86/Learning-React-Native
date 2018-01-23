import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardSection, Button, Input } from '../common';
import { employeeUpdate } from '../../actions';
import styles from './styles';

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(prop, value) {
    // eslint-disable-next-line
    this.props.employeeUpdate({ prop: prop, value });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text => this.onChangeText('name', text)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={text => this.onChangeText('phone', text)}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={text => this.onChangeText('shift', text)}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

EmployeeCreate.propTypes = {
  employeeUpdate: PropTypes.func.isRequired,
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string
};

EmployeeCreate.defaultProps = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
