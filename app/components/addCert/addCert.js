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
import {
  Button
}from 'react-native-elements';
import api from '../../actions/api';


var ImagePicker = require('react-native-image-picker');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  picContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  pic: {
    width:390,
    height: 500,
    justifyContent: 'flex-end',
    backgroundColor: "#D8D8D8",
    marginBottom: 5
  }
});

var ImagePicker = require('react-native-image-picker');

class AddCertScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pic: {uri:''}
    }
  }

  render() {
    let orgItems={

    };
    return (
      <View style={styles.container}>
        <View
          style={styles.picContainer}>

          <Image
            source={this.state.pic}
            style={styles.pic}
          />
        <View style={{flexDirection:'row'}}>
          <Button
            raised
            style={{flex:1, marginBottom:2}}
            icon={{name: 'plus-square', type: 'font-awesome'}}
            title='Add Photo'
            backgroundColor='#6ec4e9'
            onPress={ () => this.takePicture()}
            />
            <Button
              disabled={this.state.pic.isStatic!==true}
              raised
              style={{flex:1}}
              icon={{name:'upload', type: 'font-awesome'}}
              title='Upload Certificate'
              backgroundColor='#6ec4e9'
              onPress={ () => this.uploadImage()}
              />
          </View>
        </View>
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
            uri: 'data:image/jpeg;base64,' + picture.data,
            isStatic: true,
            image: picture
          }
        });
      }
    });
  }

  uploadImage(){
    api.postCertImage(this.state.pic.image, '1000')
  }

}

export default AddCertScreen;
