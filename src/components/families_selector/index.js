import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentFamily} from '_actions/current_family';
import {btnInfo, btnSm, btnTextColor} from '_styles/components/button';
import {picker} from '_styles/components/form';
import {modalView, modalText} from '_styles/components/modal';
import {margin, padding} from '_styles/mixins';
import {Picker} from '@react-native-picker/picker';
import {Text, View, Image, TouchableOpacity, Modal, Button} from 'react-native';
import styles from '_components/families_selector/styles';

class FamiliesSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  findCurrentFamily() {
    return this.props.families.find(
      (family) => family.id === this.props.currentFamily.id,
    );
  }

  render() {
    return (
      <View style={styles.pageContainer}>
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
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[btnTextColor, styles.btnText]}>
                {this.findCurrentFamily()?.name}
              </Text>
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
              <Picker
                selectedValue={this.props.currentFamily.id}
                style={picker}
                onValueChange={(itemValue, itemIndex) => {
                  this.props.setCurrentFamily(itemValue);
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
              <Button
                onPress={() => this.setState({modalVisible: false})}
                title="Fermer"
              />
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
    currentFamily: state.currentFamily,
    families: state.families,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentFamily: (currentFamilyId) =>
      dispatch(setCurrentFamily(currentFamilyId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FamiliesSelector);
