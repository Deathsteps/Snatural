'use strict';

const React = require('react-native');

const {
  PADDING_X_SIZE,
  PADDING_M_SIZE,
  PADDING_S_SIZE,
  COLOR_MAIN,
  COLOR_BORDER,
  SCREEN_WIDTH
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1
  },

  orderInfo:{
    backgroundColor: COLOR_MAIN,
    padding: PADDING_M_SIZE,
    height: 90
  },
  info:{
    flexDirection: 'row',
    flex: 1,
    color: 'white'
  },
  orderId:{
    textAlign: 'justify',
    letterSpacing: 5
  },
  strong:{
    fontWeight: 'bold'
  },

  address: {
    marginTop: PADDING_X_SIZE
  },
  addressBackground: {
    height: 100,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    padding: PADDING_M_SIZE
  },
  addressText: {
    color: '#666',
    backgroundColor: 'transparent',
    paddingBottom: PADDING_M_SIZE
  },

  comment: {
    marginTop: PADDING_X_SIZE,
    padding: PADDING_M_SIZE,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  bars:{
    flex: 1,
    marginTop: PADDING_X_SIZE,
    backgroundColor: 'white'
  },
  bar: {
    height: 44,
    flexDirection: 'row',
    padding: PADDING_M_SIZE,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
    alignItems: 'center'
  },
  title: {
    width: 80,
    textAlign: 'left'
  },
  content: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold'
  },
  commentContent: {
    flex: 1,
    textAlign: 'right'
  }
});
