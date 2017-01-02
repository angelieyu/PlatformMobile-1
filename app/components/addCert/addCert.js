'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  Dimensions,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Button
}from 'react-native-elements';
import api from '../../actions/api';
import Dashboard from '../dashboard';

var Item = Picker.Item;
var ImagePicker = require('react-native-image-picker');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  picContainer: {
    alignItems: 'center',
    justifyContent: "center"
  },
  pic: {
    width:280,
    height:360,
    justifyContent: 'flex-end',
    backgroundColor: "#D8D8D8",
    marginBottom: 5
  }
});

var ImagePicker = require('react-native-image-picker');

let orgObject ={}
class AddCertScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pic: {uri:''},
      selectedOrg: '',
      orgList:[],
      orgPicker:'',
      orgIsLoading:false
    }
  }

  componentWillMount(){
    api.getOrgList().then( (response) => {
        this.setState({ orgList: response.map.items});
        console.log(this.state.orgList);
    });
  }

  showOrgPicker(){
    return(
      <View style={{height:190,paddingVertical:0}}>
      <Picker
        itemStyle={{fontSize:17, fontFamily: 'Avenir'}}
        style={{width:200, height:190}}
      selectedValue={this.state.selectedOrg}
        onValueChange={(selectedItem)=>{
          this.setState({selectedOrg:selectedItem})
          }
        }>
      {this.state.orgList.map((org,i) => (
        <Item
          key={org.organizationId}
          value={org.organizationId}
          label={org.organizationName}
        />
      ))}

    </Picker>
    </View>
    )
  }

  render() {

    let orgItems={

    };
    return (
      <View style={styles.container}>
          {this.showOrgPicker()}

        <View
          style={styles.picContainer}>

          <Image
            source={this.state.pic}
            style={styles.pic}
            borderColor='#cac8c8'
            resizeMode='contain'
          >
        </Image>
        <View style={{flexDirection:'row'}}>
          <Button
            raised
            style={{ marginBottom:2}}
            icon={{name: 'plus-square', type: 'font-awesome'}}
            title='Add Photo'
            backgroundColor='#6ec4e9'
            onPress={ () => this.takePicture()}
            />
            <Button
              disabled={this.state.pic.isStatic!==true}
              raised
              large={false}
              style={{}}
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

  // _upload() {
  //   Alert.alert(
  //     'Upload',
  //     'Comming up soon ...'
  //   )
  // }
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
  navigateToDashboard() {
    this.props.navigator.push({
      component: Dashboard
    })
  }
  uploadImage(){
    api.postCertImage(this.state.pic.image, this.state.selectedOrg, this.navigateToDashboard());
  }

}

export default AddCertScreen;
