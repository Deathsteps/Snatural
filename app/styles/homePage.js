'use strict';

let React = require('react-native');

const {
	PADDING_S_SIZE
} = require('./variables');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},

	list: {
		flex: 1
	},
	separator: {
		borderTopWidth: 1,
		borderTopColor: '#ccc',
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	loading: {
		flex: 1,
		height: 30,
		padding: PADDING_S_SIZE,
		textAlign: 'center'
	}
});