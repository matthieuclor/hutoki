import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

class Invitations extends Component {
  componentDidMount() {
    console.log('Invitations mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Invitations</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Invitations);
