'use strict';

const React = require('react-native');

const {
  COLOR_MAIN,
  COLOR_BORDER,
  PADDING_S_SIZE,
  PADDING_M_SIZE,
  PADDING_L_SIZE,
  FONT_M_SIZE,
  FONT_ICON
} = require('../constants/StyleConstants');


module.exports = React.StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 128,
    backgroundColor: COLOR_MAIN,
    alignItems: 'center',
    padding: PADDING_L_SIZE
  },
  tabs: {
    height: 73,
    backgroundColor: 'white'
  },
  bars: {
    marginTop: 16,
    backgroundColor: 'white',
    padding: PADDING_M_SIZE
  },
  login: {
    fontSize: FONT_M_SIZE,
    paddingTop: PADDING_M_SIZE,
    color: 'white'
  },
  bar: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
    paddingTop: PADDING_M_SIZE,
    paddingBottom: PADDING_M_SIZE,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  barLabel: {
    flex: 1
  },
  barArrow: {
    fontSize: FONT_ICON,
    width: FONT_ICON,
    textAlign: 'right',
    color: '#c1c1c1'
  }
});