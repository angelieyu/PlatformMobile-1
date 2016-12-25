import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Linking,
} from 'react-native';
import api from '../../actions/api';
import DetailViewer from '../detail';

let certs = [];

class ListCert extends Component {

  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(certs),
      isLoading:true
    }
  }

  componentDidMount(){
    api.getCertList().then( (res) => {
        certs = res.map.items;
        console.log(certs);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(certs),
          isLoading:false
        })
    });
  }


  render() {

    if (this.state.isLoading) {
          return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}
        renderHeader = {() => <View style={{height: 45, backgroundColor: '#f5f5f5'}} />}
        onEndReached = {() => console.log('')}
        renderSeparator = {(sectionID, rowID) =>
          <View
            style={styles.style_separator}
            key={`${sectionID} - ${rowID}`}
          />}
      />
    );
  }

  renderRow(rowData, sectionID, rowID) {
    let rowContainerStyle = rowID%2 ? styles.rowContainer2 : styles.rowContainer;
    return (
      <TouchableHighlight onPress={this.onPressRow.bind(this, rowID, rowData)}>
        <View style={rowContainerStyle}>
          <View>
              <Text style={styles.rowBoldfield}>
                Organization : {rowData.organizationName}
              </Text>
              <Text style={styles.rowfield}>
                File name :  {rowData.fileName}
              </Text>
              <Text style={styles.rowfield}>
                Certificate Number : {rowData.certificateNumber}
              </Text>
              <Text style={styles.rowfield}>
                Expiration Date : {rowData.expirationDate}
              </Text>
         </View>
         <View style={styles.separator} />
        </View>
      </TouchableHighlight>
        );
      }

  onPressRow(rowID, rowData) {
    console.log("row data is ", rowData);
    console.log("props navigator is ", this.props.navigator);

    // let link = api.getCertImageUrl(rowData.certificateId);
    // Linking.openURL(link);

    this.props.navigator.push({
            component: DetailViewer,
            passProps: {rowData}
        });
  }

  renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightContainer: {
        flex: 1
  },
  rowContainer2: {
        //backgroundColor: '#F5FCFF',
  },
  rowContainer: {
          backgroundColor: '#ecf0f3',
  },
  rowBoldfield: {
        fontSize: 14,
        marginBottom: 8
  },
  rowfield: {
      color: '#656565'
  },
  separator: {
        height: 1,
        backgroundColor: '#000'
  },
});



export default ListCert;
