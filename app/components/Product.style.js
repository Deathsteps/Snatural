'use strict';

const React = require('react-native');

const { 
  COLOR_PRICE,
  FONT_X_SIZE,
  PADDING_M_SIZE
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: PADDING_M_SIZE,
    backgroundColor: 'white'
  },
  image: {
    width: 160,
    height: 160
  },
  desc: {
    flex: 1
  },
  title: {
    flex: 1,
    paddingBottom: PADDING_M_SIZE
  },
  price: {
    flex: 1,
    color: COLOR_PRICE,
    fontSize: FONT_X_SIZE,
    fontWeight: 'bold',
    paddingBottom: PADDING_M_SIZE
  },
  fav: {
    flex: 1
  },
  favCount: {
    flex: 1
  }
});