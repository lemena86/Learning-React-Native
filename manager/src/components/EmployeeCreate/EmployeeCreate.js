import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardSection, Button } from '../common';
import { employeeUpdate, employeeCreate } from '../../actions';
import EmployeeForm from '../EmployeeForm';

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
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
  employeeCreate: PropTypes.func.isRequired,
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string
};

EmployeeCreate.defaultProps = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);
