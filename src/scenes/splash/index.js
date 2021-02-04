import React, {Component} from 'react';
import {connect} from 'react-redux';
import {restoreUserData} from '_actions/authentification';
import {View, Image, ActivityIndicator, StyleSheet} from 'react-native';

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
  }

  componentDidMount() {
    this.props.restoreUserData();
  }

  render() {
    return (
      <View style={styles.container}>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    restoreUserData: () => dispatch(restoreUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
