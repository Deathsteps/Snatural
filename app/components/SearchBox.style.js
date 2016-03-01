'use strict';

const React = require('react-native');

const {
  PADDING_M_SIZE,
  PADDING_S_SIZE,
  COLOR_BORDER,
  FONT_ICON,
  FONT_M_SIZE,
  BORDER_RADIUS
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    padding: PADDING_M_SIZE,
    marginLeft: PADDING_S_SIZE,
    marginRight: PADDING_S_SIZE
  },
  icon: {
    fontSize: FONT_ICON + 3,
    fontWeight: 'bold',
    color: '#999',
    position: 'absolute',
    top: 14,
    left: 15,
    backgroundColor: 'transparent'
  },
  textInput: {
    height: 35,
    borderColor: COLOR_BORDER,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    backgroundColor: 'white',
    paddingLeft: 35,
    fontSize: FONT_M_SIZE - 2
  }
});
