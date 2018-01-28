import React from 'react';
import { Text, View, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { CardSection } from '../CardSection';
import { Button } from '../Button';
import styles from './styles';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

Confirm.propTypes = {
  children: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Confirm;
