import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

class Venues extends Component {
  componentDidMount() {
    console.log('Venues mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Venues</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
