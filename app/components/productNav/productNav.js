import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  TouchableOpacity, 
  AppState
} from 'react-native';
import Dashboard from '../dashboard';

import PushController from './PushController';
var PushNotification = require('react-native-push-notification');


export default class ProductNav extends Component {
  constructor(props) {
   super(props);
   this._navigate = this._navigate.bind(this);
   this._onLocalNotification = this._onLocalNotification.bind(this);
 }

 componentDidMount() {
  AppState.addEventListener('change', this._onLocalNotification);
}

componentWillUnmount() {
  AppState.removeEventListener('change', this._onLocalNotification);
}

_navigate() {
  this.props.navigator.push({
    component: Dashboard
  })
}

_toBeDetermine() {
  Alert.alert(
    'To Be Determine',
    'Comming up soon ...'
    ) 
}
_onLocalNotification(notification){
  if(notification === 'background') {
    PushNotification.localNotificationSchedule({
      message: 'Your certificate will be expired soon.',
      date: new Date(Date.now() + 1000),
    });
  }
  
}

render() {
  return (
    <View style={styles.container}>
    <TouchableOpacity activeOpacity={.5} onPress={ this._navigate }>
    <View style={styles.button}>
    <Text style={styles.buttonText}>ECM</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={.5} onPress={ this._toBeDetermine }>
    <View style={styles.button}>
    <Text style={styles.buttonText}>...</Text>
    </View>
    </TouchableOpacity>
    <PushController />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: "#6ec4e9",
    paddingVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  }
});
