'use strict';

const React = require('react-native');

const {
  COLOR_MAIN,
  COLOR_LIGHT,
  PADDING_M_SIZE,
  PADDING_X_SIZE,
  HEIGHT_BAR
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1,
    marginTop: PADDING_X_SIZE
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_LIGHT,
    height: HEIGHT_BAR,
    paddingLeft: PADDING_M_SIZE,
    paddingRight: PADDING_M_SIZE
  },
  status: {
    flex: 1,
    textAlign: 'left',
    color: COLOR_MAIN
  },
  info: {
    flex: 1
  },
  orderId: {
    textAlign: 'right',
    color: COLOR_MAIN
  },
  createTime: {
    textAlign: 'right',
    color: COLOR_MAIN
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  productImage: {
    width: 150,
    height: 130
  },
  detail: {
    flex: 1,
    padding: PADDING_M_SIZE
  },
  title: {
    flex: 1
  },
  buyInfo: {
    flexDirection: 'row',
    padding: PADDING_M_SIZE
  },
  price: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  buyCount: {
    flex: 1,
    textAlign: 'right'
  }
});
