import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableHighlight, Button} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from '_actions/counts';

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

        <TouchableHighlight onPress={() => this.navigation.navigate('Login')}>
          <Text>Go to Login</Text>
        </TouchableHighlight>

        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text>{this.props.count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.test.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCount: (count) => dispatch(changeCount(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
