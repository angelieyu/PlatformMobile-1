import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  Button
}from 'react-native-elements';

import Dashboard from '../dashboard';
const logo = require("./sovos-logo.png");

const { width, height } = Dimensions.get("window");

export default class ProductNav extends Component {
  constructor(props) {
     super(props);
     this._navigate = this._navigate.bind(this);
     this.state = {

     };
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} style={styles.mark} resizeMode="center" />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.linkWrap}>
            <Button
              raised
              icon={{name: 'certificate', type:'font-awesome'}}
              title='CERTIFICATE MANAGEMENT'
              backgroundColor='#6ec4e9'
              onPress={ this._navigate }
              />
          </View>
          <View style={styles.linkWrap}>
            <Button
              raised
              icon={{name: 'calculator', type:'font-awesome'}}
              title='ALLOY'
              backgroundColor='#6ec4e9'
              onPress={ this._toBeDetermine }
              />
          </View>
          <View style={styles.linkWrap}>
            <Button
              raised
              icon={{name: 'line-chart', type:'font-awesome'}}
              title='REPORT'
              backgroundColor='#6ec4e9'
              onPress={ this._toBeDetermine }
              />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    paddingVertical: 0,

  },
  mark: {
    height: 30
  },
  background: {
    width,
    height,
    //backgroundColor: "white",
  },

  wrapper: {
    paddingVertical: 10
  },
  linkWrap: {
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
