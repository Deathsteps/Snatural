'use strict';

const React = require('react-native');

const {
  View,
  Text,
  TouchableHighlight
} = React;

const Icon = require('react-native-vector-icons/MaterialIcons');
const styles = require('./Me.style');
const IconButton = require('../components/common/IconButton');
const Avatar = require('../components/Avatar');
const PageMixin = require('./PageMixin');


let data = [
  { title: "全部订单", color: '#fd9055', target: 'OrderList', icon: 'assignment'},
  { title: "地址管理", color: '#349cf2', target: 'AddressList', icon: 'place'},
  { title: "我的喜欢", color: '#fc6875', target: 'OrderList', icon: 'favorite'},
  { title: "意见反馈", color: '#99d0ac', target: 'OrderList', icon: 'comment'},
  { title: "我的分销", color: '#7690f4', target: 'Distribution', icon: 'device-hub'}
];

const Bar = (props) => {
  let {icon, title, color, onPress} = props;
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#B5B5B5">
      <View style={styles.bar}>
        <IconButton
          icon={icon}
          iconColor={color}
          text={title}
          mode="label"
          wrapStyle={styles.barLabel}
        />
        <Icon name="chevron-right" style={styles.barArrow}/>
      </View>
    </TouchableHighlight>
  )
};

const Me = React.createClass({

  mixins: [PageMixin],

  getInitialState() {
    return {

    }
  },

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar imageUrl="http://wx.qlogo.cn/mmopen/Q3auHgzwzM5nicORia5VjicDtiaBVEdhvShRu6iaIrrkg6T6uGxjMrQISADvW5Oib66tXXvArMxXFQJ92YcDYN7VtvrDe2VDCSRG2b6mUVfj0cQFo/0"/>
          <Text style={styles.login}>登录</Text>
        </View>
        <View style={styles.tabs}></View>
        <View style={styles.bars}>
          {data.map((item, i) => {
            return <Bar key={i} {...item} onPress={()=>this.goto(item.target)}/>
          })}
        </View>
      </View>
    )
  }

})

module.exports = Me;
