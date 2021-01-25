import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

class Settings extends Component {
  componentDidMount() {
    console.log('Settings mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Settings</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
