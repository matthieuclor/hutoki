import React, {Component} from 'react';
import {View, ActivityIndicator, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {restoreUserData, signIn} from '_actions/authentification';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.props.restoreUserData();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
      },
    });

    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
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
    restoreUserData: () => dispatch(restoreUserData()),
    signIn: (data) => dispatch(signIn(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
