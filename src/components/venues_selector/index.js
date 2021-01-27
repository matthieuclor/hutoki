import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Dimensions} from 'react-native';
import VenueCarouselItem from '_components/venue_carousel_item';
import styles from '_components/venues_selector/styles';

const windowWidth = Dimensions.get('window').width;

class VenuesSelector extends Component {
  constructor(props) {
    super(props);
    this.viewabilityConfig = {itemVisiblePercentThreshold: 70};

    this.onViewableItemsChanged = ({viewableItems}) => {
      if (viewableItems[0]) {
        console.log(viewableItems[0].item.id);
      }
    };
  }

  render() {
    return (
      <View style={styles.pageContainer}>
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
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VenuesSelector);
