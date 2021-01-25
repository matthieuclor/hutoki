import React, {Component} from 'react';
import {btnSuccess, btnTextColor, formContainer, inputText} from '_styles/form';
import {logo100} from '_styles/logo';
import {margin} from '_styles/mixins';
import {connect} from 'react-redux';
import {authenticateUser} from '_actions/authentification';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  Platform,
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
          style={[logo100, margin({b: 50})]}
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
            style={btnSuccess}
            onPress={() => {
              this.props.authenticateUser(this.state);
            }}>
            <Text style={btnTextColor}>Se connecter</Text>
          </TouchableOpacity>
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
