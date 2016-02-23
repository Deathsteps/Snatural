/**
 * @fileOverview 订单列表页
 */

'use strict';

const React = require('react-native');

const {
	View,
	Text,
  ListView
} = React;

const styles = require('./OrderList.style');

const TimerMixin = require('react-timer-mixin');
const TabBar = require('../components/common/ScrollableTabBar');
const RefreshableListView = require('../components/common/RefreshableListView');
const Loading = require('../components/common/Loading');
const PageMixin = require('./PageMixin');
const Order = require('../components/Order');


const {ORDER_STATUS} = require('../constants/OrderConstants');

let data = [
  { title: '全部', key: 'all' },
  { title: '待支付', key: ORDER_STATUS.WAIT_PAY },
  { title: '待收货', key: ORDER_STATUS.WAIT_DELIVER },
  { title: '已完成', key: ORDER_STATUS.COMPLETED }
];
let listData = [{"orderId":"151130000421","totalPrice":285.0,"orderStatus":1,"createTime":1448883356000,"products":[{"productId":"0000000995","title":"Good Health 深海鱼油胶囊1500mg 400粒/瓶（2瓶）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448554281556.jpeg!200","price":285.0,"buyCount":1}]},{"orderId":"151129000201","totalPrice":420.0,"orderStatus":3,"createTime":1448803578000,"products":[{"productId":"0000000886","title":"Anchor安佳奶粉套装 3袋全脂+3袋脱脂","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1447154437435.png!200","price":420.0,"buyCount":1}]},{"orderId":"151129000191","totalPrice":420.0,"orderStatus":1,"createTime":1448803287000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151129000071","totalPrice":420.0,"orderStatus":7,"createTime":1448774139000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000751","totalPrice":858.0,"orderStatus":4,"createTime":1448549667000,"products":[{"productId":"0000000906","title":"Karicare可瑞康金装1段婴幼儿奶粉（6罐装）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448460776768.png!200","price":780.0,"buyCount":1}]},{"orderId":"151126000741","totalPrice":420.0,"orderStatus":3,"createTime":1448549170000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000201","totalPrice":420.0,"orderStatus":3,"createTime":1448521895000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000181","totalPrice":420.0,"orderStatus":3,"createTime":1448521647000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000161","totalPrice":420.0,"orderStatus":3,"createTime":1448521459000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151125000011","totalPrice":65.0,"orderStatus":6,"createTime":1448454392000,"products":[{"productId":"0000000894","title":"Parrs帕氏麦卢卡蜂胶蜂蜜皂140g 洗脸沐浴控油去痘手工皂","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448453381271.jpeg!200","price":65.0,"buyCount":1}]}];

const OrderList = React.createClass({
  mixins: [PageMixin, TimerMixin],

  getInitialState(){
    let dataSource = {};
    data.forEach(function (item) {
      dataSource[item.key] = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
    });
    return {
      activeTab: 'all',
      fetched: false,
      dataSource
    }
  },

  render(){
    let {activeTab} = this.state;

    return (
    	<View style={styles.container}>
    		<TabBar initalActive="all" tabPosition="top">
    			{data.map((item) => {
    				return (
  	  				<TabBar.Tab 
                key={item.key} 
                style={styles.tab}
                onPress={()=> this.setState({activeTab: item.key})}>
  	  				  <Text style={[styles.tabText, activeTab === item.key ? styles.activeTabText : null]}>
                  {item.title}
                </Text>
  	  				</TabBar.Tab>
    				);
    			})}
    			{data.map((item) => {
    				return (
  	  				<TabBar.View key={item.key}>
  	  				  {this._renderList(item.key)}
  	  				</TabBar.View>
    				);
    			})}
    		</TabBar>
        {this._renderNavigatorBar()}
    	</View>
    );
  },

  _renderList(key){
    let dataSource = this.state.dataSource[key];
    if(this.state.fetched){
      return (
        <RefreshableListView
          dataSource={dataSource}
          renderRow={this._renderRow}
          onInfinite={(done)=>console.log('hello world!')}
        />
      );
    }else{
      return <Loading />
    }
  },

  _renderRow(data){
    return <Order {...data} onPress={this._onOrderPress}/>
  },

  _onOrderPress(orderId){
    this.goto('OrderDetail', {orderId});
  },

  componentDidMount() {
    this.fetchData();
  },

  fetchData(){
    this.setTimeout(() => {
      let dataSource = this.state.dataSource;
      for(let key in dataSource){
        if(key === 'all'){
          dataSource[key] = dataSource[key].cloneWithRows(listData)
        }else{
          dataSource[key] = dataSource[key].cloneWithRows(
            listData.filter(function (item) {
              return item.orderStatus == key
            })
          )  
        }
      }

      this.setState({
        fetched: true,
        dataSource
      })
    }, 500);
  }

});
module.exports = OrderList;