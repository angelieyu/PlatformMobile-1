import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {
  Button
}from 'react-native-elements';
import ProductNav from '../productNav'

const { width, height } = Dimensions.get("window");

const logo = require("./login1_logo.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class LoginScreen extends Component {

   constructor(props) {
    super(props);
    this._navigate = this._navigate.bind(this);
  }

   _navigate() {
     this.props.navigator.push({
       component: ProductNav
     })
  }

  render() {

    return (
      <View style={styles.container}>
        <View resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={logo} style={styles.mark}/>
          </View>
          <View style={styles.wrapper}>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#E0E0E0"
                style={styles.input}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholderTextColor="#E0E0E0"
                placeholder="Password"
                style={styles.input}
                secureTextEntry
              />
            </View>
            <Button
              raised
              icon={{name: 'https'}}
              title='SIGN IN'
              backgroundColor='#6ec4e9'
              onPress={ this._navigate }/>
          </View>
          <View style={styles.container}>

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
  markWrap: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  mark: {
  alignItems: 'center',
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#6ec4e9",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});
