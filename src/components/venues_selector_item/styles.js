import {StyleSheet, Dimensions} from 'react-native';
import {GRAY_MEDIUM} from '_styles/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  shadowConstainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  constainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    width: windowWidth - 60,
    maxHeight: 100,
  },
  venueImage: {
    width: 100,
    height: 100,
  },
  withoutImage: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  vanueName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
  textGray: {
    color: GRAY_MEDIUM,
  },
});

export default styles;
