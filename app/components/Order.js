/**
 * @fileOverview 订单列表页
 */

'use strict';

const React = require('react-native');

const {
  Image,
  View,
  Text,
  TouchableWithoutFeedback
} = React;

const styles = require('./Order.style');
const { ORDER_STATUS_TEXT } = require('../constants/OrderConstants');

const formatTime = (timestamp) => {
  let date = new Date(timestamp);
  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
}

const Order = (props) => {
  let {orderStatus, createTime, orderId, products, onPress} = props;
  // 这是暂时这么处理，到时需要一个新的Order
  let firstProduct;
  if(props.packages)
    firstProduct = props.packages[0].products[0];
  else
    firstProduct = products[0];
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.status}>{ORDER_STATUS_TEXT[orderStatus]}</Text>
          <View style={styles.info}>
            <Text style={styles.orderId}>订单号: {orderId}</Text>
            <Text style={styles.createTime}>{formatTime(createTime)}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.productImage}
            source={{uri: firstProduct.imageUrl}}/>
          <View style={styles.detail}>
            <Text style={styles.title}>{firstProduct.title}</Text>
            <View style={styles.buyInfo}>
              <Text style={styles.price}>￥{firstProduct.price}</Text>
              <Text style={styles.buyCount}>{firstProduct.buyCount}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

module.exports = Order;
