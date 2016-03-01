'use strict';

const React = require('react-native');

const {
  View,
  Text
} = React;

const Icon = require('react-native-vector-icons/MaterialIcons');
let styles = require('./Distribution.style');
const PageMixin = require('./PageMixin');
const IconButton = require('../components/common/IconButton');

let statData = { lastMonthIncome: 1200, lastMonthSales: 110, notSettledSales: 220, thisMonthIncome: 330, thisMonthSales: 550 };
let statLabel = { lastMonthIncome: '上月收入', lastMonthSales: '上月销售额', notSettledSales: '未结算销售额', thisMonthIncome: '本月收入', thisMonthSales: '本月销售额' }
let operations = [
  { title: "店铺管理", color: '#98d1ad', target: 'Shop', icon: 'store'},
  { title: "销售详情", color: '#9ccce3', target: 'OrderList', icon: 'equalizer'},
  { title: "商品管理", color: '#e79cac', target: 'OrderList', icon: 'shopping-basket'},
  { title: "团队管理", color: '#f5cc87', target: 'OrderList', icon: 'people'}
]

const Distribution = React.createClass({

  mixins: [PageMixin],

  getInitialState() {
    return {

    }
  },

  render(){
    let actionBar = this._renderNavigatorBar();

    return (
      <View style={styles.container}>
        <View style={styles.stats}>
          {this._renderStatistics()}
        </View>
        <View style={styles.operations}>
          {operations.map((item,i) => {
            return (
              <IconButton
                key={i}
                icon={item.icon}
                text={item.title}
                wrapStyle={styles.iconButton}
                iconViewStyle={[styles.iconViewStyle, {backgroundColor: item.color}]}
                iconStyle={styles.iconStyle}
                textStyle={styles.textStyle}
                onPress={() => this.goto(item.target)}
              />
            );
          })}
        </View>
        <View style={styles.products}>
        </View>
        {actionBar}
      </View>
    )
  },

  _renderStatistics(){
    return ( 
      Object
        .keys(statData)
        .map((key) => {
          return (
            <View style={styles.statItem} key={key}>
              <Text style={styles.label}>{statLabel[key]}：</Text>
              <Text style={[styles.number, key === 'thisMonthIncome' ? styles.important : null]}>
                {statData[key]}
              </Text>
            </View>
          )
        })
    );
  }

})

module.exports = Distribution;
