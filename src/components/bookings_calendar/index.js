import React, {Component} from 'react';
import {connect} from 'react-redux';
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

  checkForYearData(months) {
    uniqBy(months, 'year').map((month) => {
      if (!this.props.knownYearsBookings.includes(month.year)) {
        this.props.getYearBookings(month.year);
        this.props.updateKnownYearsBookings(month.year);
      }
    });
  }

  removeBookings = async () => {
    await this.props.removeYearBookings();
    await this.props.removeKnownYearsBookings();
  };

  componentDidUpdate({currentVenue}) {
    if (
      this.props.currentVenue !== currentVenue &&
      this.calendarList.current.state.currentMonth
    ) {
      this.removeBookings().then(
        this.checkForYearData([
          {
            year: new Date(
              this.calendarList.current.state.currentMonth,
            ).getFullYear(),
          },
        ]),
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CalendarList
          ref={this.calendarList}
          onVisibleMonthsChange={(months) => this.checkForYearData(months)}
          firstDay={1}
          markedDates={this.props.yearBookings}
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
