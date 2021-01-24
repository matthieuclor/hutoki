import React, {Component} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {restoreUserData, signIn} from '_actions/authentification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
});

class Splash extends Component {
  constructor(props) {
    super(props);
    this.props.restoreUserData();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />

        <Image
          style={styles.logo}
          source={require('_assets/images/hutoki-square.png')}
        />

        <ActivityIndicator />
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
