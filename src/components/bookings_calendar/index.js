import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {getYearBookings} from '_actions/year_bookings';
import {updateKnownYearsBookings} from '_actions/known_years_bookings';
import {removeYearBookings} from '_actions/year_bookings';
import {removeKnownYearsBookings} from '_actions/known_years_bookings';
import {uniqBy} from 'lodash';
import {CalendarList} from 'react-native-calendars';
import {View} from 'react-native';
import styles from '_components/bookings_calendar/styles';
import {LocaleConfig} from 'react-native-calendars';
import {calendarLocals} from '_locals';
import {createRef} from 'react';

LocaleConfig.locales.fr = calendarLocals;
LocaleConfig.defaultLocale = 'fr';

class BookingsCalendar extends Component {
  constructor(props) {
    super(props);
    this.calendarList = createRef();
  }

  componentDidUpdate({currentVenue}) {
    if (
      this.props.currentVenue !== currentVenue &&
      this.calendarList.current.state.currentMonth
    ) {
      this.removeBookings().then(
        this.checkForYearData(this.getCurrentMonths()),
      );
    }
  }

  removeBookings = async () => {
    await Promise.all(
      this.props.removeYearBookings(),
      this.props.removeKnownYearsBookings(),
    );
  };

  getCurrentMonths = () => {
    const currentMonth = this.calendarList.current.state.currentMonth.toString();
    const firstDate = moment(currentMonth);
    const lastDate = moment(currentMonth).add(3, 'months');

    return [{year: firstDate.year()}, {year: lastDate.year()}];
  };

  checkForYearData(months) {
    uniqBy(months, 'year').map((month) => {
      if (!this.props.knownYearsBookings.includes(month.year)) {
        this.props.getYearBookings(month.year);
        this.props.updateKnownYearsBookings(month.year);
      }
    });
  }

  onDayPress(day) {
    const booking = this.props.yearBookings[day.dateString];

    if (!booking) {
      return;
    }

    console.log('onDayPress', booking);
  }

  onDayLongPress(day) {
    const booking = this.props.yearBookings[day.dateString];

    if (!booking) {
      return;
    }

    console.log('onDayLongPress', booking);
    this.props.navigation.navigate('Booking', {bookingId: booking.bookingId});
  }

  render() {
    return (
      <View style={styles.container}>
        <CalendarList
          ref={this.calendarList}
          onVisibleMonthsChange={this.checkForYearData.bind(this)}
          onDayPress={this.onDayPress.bind(this)}
          onDayLongPress={this.onDayLongPress.bind(this)}
          markedDates={this.props.yearBookings}
          firstDay={1}
          markingType={'period'}
          pastScrollRange={24}
          futureScrollRange={12}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    yearBookings: state.yearBookings,
    knownYearsBookings: state.knownYearsBookings,
    currentVenue: state.currentVenue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getYearBookings: (year) => dispatch(getYearBookings(year)),
    updateKnownYearsBookings: (knownYear) =>
      dispatch(updateKnownYearsBookings(knownYear)),
    removeYearBookings: () => dispatch(removeYearBookings()),
    removeKnownYearsBookings: () => dispatch(removeKnownYearsBookings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingsCalendar);
