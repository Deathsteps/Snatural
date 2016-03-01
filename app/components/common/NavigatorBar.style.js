'use strict';

const React = require('react-native');

const {
  COLOR_MAIN,
  FONT_L_SIZE,
  FONT_ICON,
  PADDING_S_SIZE,
  HEIGHT_BAR
} = require('../../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    height: HEIGHT_BAR,
    backgroundColor: COLOR_MAIN,
    flexDirection: 'row',
    alignItems: 'center'
  },
  back: {
    height: HEIGHT_BAR,
    width: 120,
    marginLeft: PADDING_S_SIZE
  },
  backIcon: {
    width: FONT_ICON - PADDING_S_SIZE,
    color: 'white'
  },
  backText: {
    fontSize: FONT_L_SIZE,
    color: 'white'
  }
});
