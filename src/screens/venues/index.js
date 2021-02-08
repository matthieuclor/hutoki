import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import FamiliesSelector from '_components/families_selector';

class Venues extends Component {
  componentDidMount() {
    console.log('Venues mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <FamiliesSelector />
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
