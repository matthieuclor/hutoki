import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

class Members extends Component {
  componentDidMount() {
    console.log('Members mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Members</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Members);
