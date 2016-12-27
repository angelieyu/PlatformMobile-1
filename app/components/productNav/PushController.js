'use strict';
import React, { Component } from 'react';

var PushNotification = require('react-native-push-notification');

export default class PushController extends Component {
	componentDidMount() {
		PushNotification.configure({
			onNotification: function(notification) {
				console.log('NOTIFICATION:', notification);
			}
		});
	}

	render() {
		return null;
	}
}