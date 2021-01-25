import React, {Component} from 'react';
import {SUCCESS, GRAY_MEDIUM} from '_styles/colors';
import {connect} from 'react-redux';
import {authenticateUser} from '_actions/authentification';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: SUCCESS,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '80%',
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
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('_assets/images/hutoki-square.png')}
        />

        <View style={styles.formContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            autoCompleteType="email"
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            style={styles.input}
          />

          <TextInput
            value={this.state.password}
            autoCompleteType="password"
            onChangeText={(password) => this.setState({password})}
            placeholder="Mot de passe"
            secureTextEntry={true}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.authenticateUser(this.state);
            }}>
            <Text style={styles.text}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
