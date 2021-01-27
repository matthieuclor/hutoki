import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import FamiliesSelector from '_components/families_selector';

class Members extends Component {
  componentDidMount() {
    console.log('Members mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <FamiliesSelector />
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
