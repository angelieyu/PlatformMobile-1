'use strict';

import React, { Component } from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import CertList from './certList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#6ec4e9'
    }
});

class ListCertScreen extends Component {
    render() {
        return (
            <NavigatorIOS
                barTintColor='#6ec4e9'
                titleTextColor='#fff'
                tintColor='#fff'
                style={styles.container}
                initialRoute={{
            title: 'Certificate List',
            component: CertList
        }}/>
        );
    }
}

export default ListCertScreen;
