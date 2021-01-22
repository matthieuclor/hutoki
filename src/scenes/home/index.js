import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from '_actions/counts';
import {signOut} from '_actions/authentification';

class HomeScreen extends Component {
  componentDidMount() {
    console.log('Home mouned');
  }

  decrementCount() {
    let count = this.props.count;
    count--;
    this.props.changeCount(count);
  }

  incrementCount() {
    let count = this.props.count;
    count++;
    this.props.changeCount(count);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Screen: Home</Text>

        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text>{this.props.count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />

        <Button title="Logout" onPress={() => this.props.signOut()} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.test.count,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCount: (count) => dispatch(changeCount(count)),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
