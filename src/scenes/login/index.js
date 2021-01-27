import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '_actions/authentification';
import {formContainer, inputText} from '_styles/components/form';
import {btnSuccess, btnMd, btnTextColor} from '_styles/components/button';
import {image100} from '_styles/components/image';
import {margin} from '_styles/mixins';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  Platform,
  Button,
  Linking,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Image
          style={[image100, margin({b: 50})]}
          source={require('_assets/images/hutoki-square.png')}
        />

        <View style={formContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            autoCompleteType="email"
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            style={inputText}
          />

          <TextInput
            value={this.state.password}
            autoCompleteType="password"
            onChangeText={(password) => this.setState({password})}
            placeholder="Mot de passe"
            secureTextEntry={true}
            style={inputText}
          />

          <TouchableOpacity
            style={[btnSuccess, btnMd, margin({b: 30})]}
            onPress={() => {
              this.props.authenticateUser(this.state);
            }}>
            <Text style={btnTextColor}>Se connecter</Text>
          </TouchableOpacity>

          <Button
            title="Créer un compte"
            onPress={() => {
              Linking.openURL('https://www.hutoki.com/pricing');
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (user) => dispatch(authenticateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
