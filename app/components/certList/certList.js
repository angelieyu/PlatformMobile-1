import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Linking,
  RefreshControl,
} from 'react-native';
import {
  Button
}from 'react-native-elements';
import api from '../../actions/api';
import DetailViewer from '../detail';

let certs = [];

class ListCert extends Component {

  constructor(props) {
    super(props);
    this.listHeight = 0;
    this.footerY = 0;
    this.currentPage = 0;
    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(certs),
      isLoading:true
    }
  }

  _onRefresh() {
    this.setState({
      isLoading:true});
    api.getCertList(0, 0).then( (res) => {

      setTimeout(() => {
        certs = res.map.items;
        console.log(certs);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(certs),
          isLoading:false
        })
      }, 1000);
    });

  }

  loadMore(){
     console.log("loadmore is being called");
     // should call the same api with different page id for the API.

     if (!this.state.isLoading){
       this.setState({isLoading:true});
       let footerY = this.footerY;
       let pageToLoad = this.currentPage++;
       api.getCertList(pageToLoad,50).then( (res) => {
           // merge the rows
           var newCertsList = certs.concat(res.map.items);
           console.log(newCertsList.length);
           this.setState({
             dataSource: this.state.dataSource.cloneWithRows(newCertsList),
             isLoading:false
           })
           // scroll to the row
           this.scrollToRows(footerY);
       });
    }
 }


  componentDidMount(){
    // load cert List initially
    api.getCertList(0, 0).then( (res) => {
        certs = res.map.items;
        console.log(certs);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(certs),
          isLoading:false
        })
    });
  }

  scrollToRows(footerY) {
     console.log("footerY", footerY);
     console.log("listHeight", this.listHeight);


         if (this.listHeight && this.footerY && this.footerY > this.listHeight) {
           // Calculates the y scroll position inside the ListView
           const scrollTo = this.footerY - (this.listHeight ) ;

           // Scroll that sucker!
           this.refs.listView.scrollTo({
             y: scrollTo,
             animated: true,
           })
         }

 }



  render() {

    if (this.state.isLoading) {
          return this.renderLoadingView();
    }

    return (
      <ListView
        ref='listView'
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}
        renderHeader = {() => <View style={{height: 45, backgroundColor: '#f5f5f5', marginBottom:10}} />}
        onEndReached = {() => console.log('')}
        onEndReachedThreshold= {0}
        onEndReached={this.onEndReached}
        onLayout={this.onLayout}
        renderFooter={this.renderFooter}
        onScroll={this.onScroll}
        renderSeparator = {(sectionID, rowID) =>
          <View
            style={styles.style_separator}
            key={`${sectionID} - ${rowID}`}
          />}

          refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
      <Button
        raised
        style={{flex:1}}
        icon={{name: 'plus-square', type: 'font-awesome'}}
        title='Load More'
        backgroundColor='#6ec4e9'
        />
    </ListView>
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
         </View>
         <View style={styles.separator} />
        </View>
      </TouchableHighlight>

        );
      }

  onPressRow(rowID, rowData) {
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

  onEndReached = () => {
    console.log("onEndReached");
    this.loadMore();
  }

  onScroll = () => {
    // this.isUserScrolling = true;
    // console.log("onScroll");
  }

  onFooterLayout = (event) => {
    const layout = event.nativeEvent.layout
    this.footerY = layout.y
    //console.log("onFooterLayout", this.footerY);
  }

  // Render a fake footer
  renderFooter = () => {
    return (
      <View onLayout={this.onFooterLayout} />
    )
  }

  onLayout = (event) => {
    const layout = event.nativeEvent.layout
    this.listHeight = layout.height
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
        fontSize: 16,
        fontFamily: 'Avenir',

        paddingLeft: 5,
        paddingTop: 5,
  },
  rowfield: {
      color: '#656565',
      fontFamily: 'Avenir',
      paddingLeft: 5,
      paddingBottom: 5,
  },
  separator: {
        height: 1,
        backgroundColor: '#cac8c8'
  },
});



export default ListCert;
