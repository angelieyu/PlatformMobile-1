'use strict'

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import LoginScreen from '../components/login'
import { Navigator } from 'react-native';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class EcmMobileApp extends Component {
  constructor(props) {
      super(props);
    }

  renderScene(route, navigator) {
  		return <route.component navigator={navigator} {...route.passProps} />
  }

  configureScene(route, routeStack){
  //  if(route.type == 'Modal') {
    	return Navigator.SceneConfigs.FloatFromBottom
  //  }
  //	return Navigator.SceneConfigs.PushFromRight
  }

  render() {
      return (
        <Navigator
        configureScene={ this.configureScene }
        style={ styles.container }
    		renderScene={ this.renderScene }
    		initialRoute={{ component: LoginScreen }}
    		/>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25
  }
});


export default connect(state => ({
    //state: state.counter
  }),
  (dispatch) => ({
    //actions: bindActionCreators(counterActions, dispatch)
  })
)(EcmMobileApp);
