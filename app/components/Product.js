/**
 * @fileOverview 产品列表
 */

'use strict';

const React = require('react-native');

const {
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

const styles = require('./Product.style');

const Product = (props) => {
  let {productId, title, imageUrl, price, onPress} = props;
  return (
    <TouchableHighlight onPress={()=> onPress(productId)}>
      <View style={styles.container}>
        <Image 
          source={{uri: imageUrl}} 
          style={styles.image}
        />
        <View style={styles.desc}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>￥ {price}</Text>
          <View style={styles.fav}>
            <Text style={styles.favCount}>喜欢 7</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
};

module.exports = Product;