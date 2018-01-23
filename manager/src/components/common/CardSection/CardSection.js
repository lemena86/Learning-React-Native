import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import styles from './styles';

const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

CardSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: stylePropType
};

CardSection.defaultProps = {
  style: {}
};

export default CardSection;
