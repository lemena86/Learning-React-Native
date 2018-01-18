import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import styles from './styles';
import * as actions from '../../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

ListItem.propTypes = {
  library: Proptypes.shape({
    id: Proptypes.number,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired
  }).isRequired,
  selectLibrary: Proptypes.func.isRequired,
  expanded: Proptypes.bool
};
ListItem.defaultProps = {
  expanded: false
};
export default connect(mapStateToProps, actions)(ListItem);
