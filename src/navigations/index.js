import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AuthNavigator from './auth_navigator';
import AppNavigator from './app_navigator';
import Splash from '_scenes/splash';

class RootNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.authentification.isLoading) {
      return <Splash />;
    }

    return (
      <NavigationContainer>
        {this.props.authentification.isSignout ? (
          <AuthNavigator />
        ) : (
          <AppNavigator isSignout={this.props.authentification.isSignout} />
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authentification: state.authentification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
