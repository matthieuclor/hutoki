import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {signOut} from '_actions/authentification';

class Dashboard extends Component {
  componentDidMount() {
    console.log('Dashboard mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Dashboard</Text>
        <Button title="Logout" onPress={() => this.props.signOut()} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
