'use strict';

const React = require('react-native');

const {
  FONT_X_SIZE,
  PADDING_M_SIZE,
  COLOR_PRICE
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1
  },

  product: {
    padding: PADDING_M_SIZE,
    backgroundColor: 'white'
  },
  imageContainer: {
    height: 280,
    alignItems: 'center'
  },
  image: {
    width: 280,
    height: 280
  },
  desc: {
    height: 90,
    marginTop: PADDING_M_SIZE
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
  others: {
    flex: 1,
    flexDirection: 'row'
  },
  stock: {
    flex: 1
  },
  fav: {
    width: 50
  },
  favCount: {
    flex: 1
  },

  brand: {
    padding: PADDING_M_SIZE,
    marginTop: PADDING_M_SIZE,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  logo: {
    width: 60,
    height: 30
  },
  name: {
    flex: 1
  },

  detail: {
    flex: 1
  }
});
