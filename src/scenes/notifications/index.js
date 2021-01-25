import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

class Notifications extends Component {
  componentDidMount() {
    console.log('Notifications mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Notifications</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
