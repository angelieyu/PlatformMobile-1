'use strict';

import React, { Component } from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import ProductNav from './productNav';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#6ec4e9'
    }
});

class ProductNavigateScreen extends Component {
    constructor(props) {
     super(props);
   }
    render() {
        return (
            <NavigatorIOS
                barTintColor='#6ec4e9'
                titleTextColor='#fff'
                tintColor='#fff'
                style={styles.container}
                initialRoute={{
                    title: 'Product Navigation',
                    component: ProductNav
                }}/>
        );
    }
}

export default ProductNavigateScreen;
