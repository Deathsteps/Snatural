'use strict';

let React = require('react-native');

const { FONT_ICON } = require('./variables');

module.exports = React.StyleSheet.create({
	image: {
		width: 64,
		height: 64,
		backgroundColor: 'transparent'
	},
	container: {
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden'
	}
});