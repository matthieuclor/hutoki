import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import FamiliesSelector from '_components/families_selector';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Dashboard mouned');
  }

  render() {
    return (
      <SafeAreaView>
        <FamiliesSelector />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
