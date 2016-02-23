'use strict';

const React = require('react-native');

const {
  SCREEN_WIDTH,
  HEIGHT_BAR,
  COLOR_MAIN
} = require('../../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  view: {
    width: SCREEN_WIDTH
  },
  tabContainer: {
    height: HEIGHT_BAR,
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    height: HEIGHT_BAR
  },

  tabLine: {
    position: 'absolute',
    height: 3,
    backgroundColor: COLOR_MAIN,
    bottom: 0
  }
});
