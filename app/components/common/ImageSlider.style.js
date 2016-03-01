'use strict';

const React = require('react-native');

const {
  SCREEN_WIDTH
} = require('../../constants/StyleConstants');

const INDICATOR_SIZE = 24;

let style = React.StyleSheet.create({
  container: {
    flex: 1
  },

  page: {
    width: SCREEN_WIDTH
  },

  indicatorContainer: {
    position: 'absolute',
    flex: 1,
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'transparent'
  },

  indicator: {
    color: '#666',
    fontSize: 32,
    lineHeight: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    width: INDICATOR_SIZE,
    textAlign: 'center',
    backgroundColor:'transparent',
    opacity: 0.8
  },

  activeIndicator: {
    color: '#ccc'
  }
});

style.INDICATOR_SIZE = INDICATOR_SIZE;

module.exports = style;
