import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {WHITE} from '_styles/colors';

const styles = StyleSheet.create({
  pageComponent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: WHITE,
  },
});

class Booking extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {bookingId} = this.props.route.params;
    console.log('componentDidMount', bookingId);
  }

  render() {
    return (
      <SafeAreaView style={styles.pageComponent}>
        <Text>Booking</Text>
      </SafeAreaView>
    );
  }
}

export default Booking;
