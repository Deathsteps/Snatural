'use strict';

const React = require('react-native');

const {
	COLOR_MAIN,
	COLOR_DARK,
	COLOR_BORDER,
	HEIGHT_BAR
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},

	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: HEIGHT_BAR,
		
		backgroundColor: 'white'
	},
	tabText: {
	},
	activeTab: {
		
	},
	activeTabText: {
		color: COLOR_DARK
	}
});
