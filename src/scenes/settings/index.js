import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '_actions/authentification';
import {SafeAreaView, Text, Button} from 'react-native';

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Settings mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Settings</Text>
        <Button title="Logout" onPress={() => this.props.signOut()} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
