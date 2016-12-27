'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

var ImagePicker = require('react-native-image-picker');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    height: 60,
    width: 160,
    backgroundColor: "#6ec4e9",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  picContainer: {
    marginTop: 15,
    marginBottom: 5
  },
  pic: {
    width: 300,
    height: 350,
    marginTop: 40,
    backgroundColor: "#D8D8D8"
  }
});

var ImagePicker = require('react-native-image-picker');

class AddCertScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pic: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.picContainer}
          onPress={() => this.takePicture()}
        >
          <Image
            source={this.state.pic}
            style={styles.pic}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} style={ styles.button } onPress={ this._upload }>
            <Text style={ styles.buttonText }>Upload</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _upload() {
    Alert.alert(
      'Upload',
      'Comming up soon ...'
    ) 
  }

  takePicture() {
    ImagePicker.showImagePicker(
      {title: "Add Certificate"}
    , (picture) => {
      if (picture.data) {
        this.setState({
          pic: {
            uri: 'data:image/jpeg;base64,' + picture.data, isStatic: true
          }
        });
      }
    });
  }
}

export default AddCertScreen;
