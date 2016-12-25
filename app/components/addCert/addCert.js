'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

var ImagePicker = require('react-native-image-picker');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  inputContainer: {
    width: Dimensions.get("window").width - 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderBottomWidth: 1
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    fontSize: 16,
    padding: 5
  },
  profilePictureContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  profilePicture: {
    width: 300,
    height: 500,
    backgroundColor: "#D8D8D8",
    marginBottom: 20
  }
});

var ImagePicker = require('react-native-image-picker');

class AddCertScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profilePicture: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profilePictureContainer}
          onPress={() => this.takePicture()}
        >
          <Image
            source={this.state.profilePicture}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
      </View>
    );
  }

  takePicture() {
    ImagePicker.showImagePicker(
      {title: "Add Certificate"}
    , (picture) => {
      if (picture.data) {
        this.setState({
          profilePicture: {
            uri: 'data:image/jpeg;base64,' + picture.data, isStatic: true
          }
        });
      }
    });
  }
}

export default AddCertScreen;
