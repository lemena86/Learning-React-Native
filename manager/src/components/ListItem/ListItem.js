import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { CardSection } from '../common';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onRowPress = this.onRowPress.bind(this);
  }
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default ListItem;
