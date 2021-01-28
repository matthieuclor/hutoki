import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrentVenue} from '_actions/current_venue';
import {View, FlatList, Dimensions} from 'react-native';
import VenueCarouselItem from '_components/venue_carousel_item';
import styles from '_components/venues_selector/styles';

const windowWidth = Dimensions.get('window').width;

class VenuesSelector extends Component {
  constructor(props) {
    super(props);
    this.viewabilityConfig = {
      itemVisiblePercentThreshold: 70,
    };
  }

  getItemLayout = (_, index) => ({
    length: windowWidth - 60,
    offset: (windowWidth - 60) * index,
    index,
  });

  onViewableItemsChanged = ({viewableItems}) => {
    if (
      viewableItems[0] &&
      viewableItems[0].item.id !== this.getCurrentVenueId()
    ) {
      this.props.updateCurrentVenue(viewableItems[0].item.id);
    }
  };

  getCurrentVenueId() {
    return parseInt(
      this.props.currentUser.currentVenueId[
        this.props.currentUser.currentFamilyId
      ],
      10,
    );
  }

  getIndexOfCurrentVenue() {
    return this.props.venues.findIndex(
      (venue) => venue.id === this.getCurrentVenueId(),
    );
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        {this.props.venues.length > 0 ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.props.venues}
            renderItem={({item}) => <VenueCarouselItem venue={item} />}
            keyExtractor={(item) => item.id.toString()}
            snapToInterval={windowWidth - 40}
            snapToAlignment="center"
            decelerationRate="fast"
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={this.viewabilityConfig}
            initialNumToRender={this.props.venues.length}
            getItemLayout={this.getItemLayout}
            initialScrollIndex={this.getIndexOfCurrentVenue()}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    venues: state.venues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentVenue: (currentVenueId) =>
      dispatch(updateCurrentVenue(currentVenueId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenuesSelector);
