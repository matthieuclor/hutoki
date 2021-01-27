import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFamilies} from '_actions/families';
import {btnInfo, btnSm, btnTextColor} from '_styles/components/button';
import {picker} from '_styles/components/form';
import {modalView, modalText} from '_styles/components/modal';
import {margin, padding} from '_styles/mixins';
import {PRIMARY} from '_styles/colors';
import {Picker} from '@react-native-picker/picker';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'row',
  },
  appLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
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
    height: 50,
  },
  selectBlock: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 150,
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class FamiliesSelector extends Component {
  constructor(props) {
    super(props);
    this.props.getFamilies();
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
      <View>
        <View style={styles.constainer}>
          <View style={styles.appBlock}>
            <Image
              style={styles.appLogo}
              source={require('_assets/images/hutoki-50x50.png')}
            />
            <Text style={styles.appText}>Hutoki</Text>
          </View>
          <View style={styles.selectBlock}>
            <Text style={styles.selectText}>Famille :</Text>
            <TouchableOpacity
              style={[btnInfo, btnSm, margin({y: 10, x: 10})]}
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <Text style={btnTextColor}>Clor</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.centeredView}>
            <View style={[modalView, padding({t: 20, x: 20})]}>
              <Text style={modalText}>Selectionez une famille</Text>
              <View>
                <Picker
                  selectedValue={this.props.currentUser.currentFamilyId}
                  style={picker}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({language: itemValue});
                    this.setState({modalVisible: false});
                  }}>
                  {this.props.families.map((family) => {
                    return (
                      <Picker.Item
                        key={family.id}
                        label={family.name}
                        value={family.id}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    families: state.families,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFamilies: () => dispatch(getFamilies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FamiliesSelector);
