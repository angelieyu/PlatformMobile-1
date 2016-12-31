import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';
import api from '../../actions/api';

export default class PdfViewer extends Component {

   constructor(props) {
    super(props);
  }
  formatDate(timeStamp){
    let t = new Date( 1370001284000 );
    return t.format("dd.mm.yyyy hh:MM:ss");
  }

  render() {

      let rowData = this.props.rowData;
      let link = api.getCertImageUrl(rowData.certificateId);
      return(
        <View style={styles.container}>
          <WebView scalesPageToFit={true} source={{uri: link}} />

          <Text style={styles.rowBoldfield}>
              File name : {rowData.fileName}
          </Text>
          <Text style={styles.rowBoldfield}>
            Certificate Number : {rowData.certificateNumber}
          </Text>
          <Text style={styles.rowBoldfield}>
            Organization : {rowData.organizationName}
          </Text>
          <Text style={styles.rowBoldfield}>
            Effective Date : {rowData.effectiveDate}
          </Text>
          <Text style={styles.rowBoldfield}>
            Expiration Date : {rowData.expirationDate}
          </Text>
          <Text style={styles.rowBoldfield}>
            Customer Name : {rowData.customerName}
          </Text>
          <Text style={styles.rowBoldfield}>
            Customer Number : {rowData.customerNumber}
          </Text>
          <Text style={styles.rowBoldfield}>
            Page Count : {rowData.pageCount}
          </Text>
          <Text style={styles.rowBoldfield}>
            Date of Upload : {(rowData.dateOfUpload)}
          </Text>
        </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
         flex:1,
         marginTop:25
    },
    linkfield : {
          color: 'blue',
          fontSize: 14,
          marginBottom: 8
    },
    rowBoldfield: {
          fontSize: 14,
          marginBottom: 8
    },
});
