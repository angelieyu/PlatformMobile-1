import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  AppState
} from 'react-native';
import {
  Button
}from 'react-native-elements';
import Dashboard from '../dashboard';
import PushController from './PushController';

const logo = require("./sovos-logo.png");
var PushNotification = require('react-native-push-notification');

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    alignItems: 'center',
    marginBottom:0
  },
  mark: {
    width: 100, height: 23
  },

  wrapper: {
    top: .4,
    paddingVertical: 40
  },
  btnWrap: {
    paddingVertical:20
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: "#6ec4e9",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  }
});

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
      message: 'Your exemption with certificates# "333-123-999" will expire tomorrow.',
      date: new Date(Date.now() + 1000),
    });
  }
}

render() {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image source={logo} style={styles.mark}>
        </Image>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.btnWrap}>
          <Button
            raised
            icon={{name: 'certificate', type:'font-awesome'}}
            title='CERTIFICATE MANAGEMENT'
            backgroundColor='#6ec4e9'
            onPress={ this._navigate }
            />
        </View>
        <View style={styles.btnWrap}>
          <Button
            raised
            icon={{name: 'calculator', type:'font-awesome'}}
            title='ALLOY'
            backgroundColor='#6ec4e9'
            onPress={ this._toBeDetermine }
            />
        </View>
        <View style={styles.btnWrap}>
          <Button
            raised
            icon={{name: 'line-chart', type:'font-awesome'}}
            title='REPORT'
            backgroundColor='#6ec4e9'
            onPress={ this._toBeDetermine }
            />
        </View>

      </View>
      <PushController/>
    </View>
    );
  }
};
