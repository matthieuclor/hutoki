import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import FamiliesSelector from '_components/families_selector';
import VenuesSelector from '_components/venues_selector';

const styles = StyleSheet.create({
  pageComponent: {
    flex: 1,
    flexDirection: 'column',
  },
  test: {
    flex: 1,
    // backgroundColor: 'blue',
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Dashboard mouned');
  }

  render() {
    return (
      <SafeAreaView style={styles.pageComponent}>
        <FamiliesSelector />
        <View style={styles.test} />
        <VenuesSelector />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
