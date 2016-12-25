import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Dashboard from '../dashboard';

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
        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.button}>
            <Text onPress={ this._navigate } style={styles.buttonText}>ECM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.button}>
            <Text onPress={ this._toBeDetermine } style={styles.buttonText}>...</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
    //backgroundColor: "white",
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
