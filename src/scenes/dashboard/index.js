import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FamiliesSelector from '_components/families_selector';
import BookingsCalendar from '_components/bookings_calendar';
import VenuesSelector from '_components/venues_selector';
import {WHITE} from '_styles/colors';

const styles = StyleSheet.create({
  pageComponent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: WHITE,
  },
});

class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={styles.pageComponent}>
        <FamiliesSelector />
        <BookingsCalendar />
        <VenuesSelector />
      </SafeAreaView>
    );
  }
}

export default Dashboard;
