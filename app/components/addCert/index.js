'use strict';

import React, { Component } from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import AddCert from './addCert';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class AddCertScreen extends Component {
    render() {
        return (
            <NavigatorIOS
              barTintColor='#6ec4e9'
              titleTextColor='#fff'
              tintColor='#fff'
                style={styles.container}
                initialRoute={{
                    title: 'Add Certificates',
                    leftButtonTitle: 'Left',
                    leftButtonIcon: require('../productNav/arrow-back.png'),
                    onLeftButtonPress: () => {
                      this.props.navigator.pop();
                    },
                    component: AddCert
                }}/>
        );
    }
}

export default AddCertScreen;
