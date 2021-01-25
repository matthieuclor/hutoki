import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {signOut} from '_actions/authentification';

class HomeScreen extends Component {
  componentDidMount() {
    console.log('Home mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Home</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
