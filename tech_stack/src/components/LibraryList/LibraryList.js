import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../ListItem';

class LibraryList extends Component {
  static renderRow(library) {
    return <ListItem library={library} />;
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={LibraryList.renderRow}
      />
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
