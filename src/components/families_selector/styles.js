import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY, WHITE, GRAY_LIGHT} from '_styles/colors';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 50,
    backgroundColor: WHITE,
    borderBottomColor: GRAY_LIGHT,
    borderBottomWidth: 1,
  },
  constainer: {
    flex: 1,
    flexDirection: 'row',
  },
  appLogo: {
    width: 50,
    marginLeft: 10,
  },
  appText: {
    color: PRIMARY,
    fontSize: 20,
    fontWeight: 'bold',
  },
  appBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
  },
  selectBlock: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnText: {
    maxWidth: 150,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
