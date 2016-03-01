'use strict';

const React = require('react-native');

const {
  COLS,
  PADDING_L_SIZE,
  FONT_ICON,
  SCREEN_WIDTH
} = require('../constants/StyleConstants');



module.exports = React.StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    
  },
  cover: {
    height: 180,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    marginLeft: PADDING_L_SIZE
  },
  desc: {
    flex: 1,
    paddingLeft: PADDING_L_SIZE,
    backgroundColor: 'transparent'
  },
  name: {
    fontSize: FONT_ICON,
    color: 'white'
  },
  notice: {
    color: 'white'
  },

  functions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: PADDING_L_SIZE
  },
  iconButton: {
    flexDirection: 'column',
    width: COLS[4]
  },
  iconStyle: {
    fontSize: 32,
    width: 32
  },

  contents: {
    flex: 1
  }

});
