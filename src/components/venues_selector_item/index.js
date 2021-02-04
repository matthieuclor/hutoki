import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {margin} from '_styles/mixins';
import {GRAY_MEDIUM} from '_styles/colors';
import styles from '_components/venues_selector_item/styles';

class VenuesSelectorItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.shadowConstainer}>
        <View style={styles.constainer}>
          {this.props.venue.photoUrl ? (
            <Image
              style={styles.venueImage}
              source={{uri: this.props.venue.photoUrl}}
            />
          ) : (
            <View style={styles.withoutImage}>
              <Text>
                <Icon name="home" size={50} color={GRAY_MEDIUM} />
              </Text>
            </View>
          )}
          <View style={styles.descriptionContainer}>
            <Text
              style={styles.vanueName}
              numberOfLines={1}
              ellipsizeMode="tail">
              {this.props.venue.name}
            </Text>
            <Text
              style={styles.textGray}
              numberOfLines={2}
              ellipsizeMode="tail">
              {this.props.venue.address}
            </Text>
            <Text style={[styles.textGray, margin({t: 5})]}>
              {this.props.venue.beddingsCount} place(s)
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default VenuesSelectorItem;
