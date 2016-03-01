'use strict';

const React = require('react-native');

const {
  View,
  Text,
  ListView
} = React;

const TimerMixin = require('react-timer-mixin');

const styles = require('./Home.style');

const Loading = require('../components/common/Loading');
const RefreshableListView = require('../components/common/RefreshableListView');
const Banner = require('../components/Banner');
const SearchBox = require('../components/SearchBox');
const Product = require('../components/Product');
const PageMixin = require('./PageMixin');

let listData = [{"productId":"0000001158","title":"RedSeal红印黑糖（1箱6瓶）500g/瓶","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1446633279427.jpeg!200","price":270.0},{"productId":"0000001157","title":"GoodHealth好健康液体钙胶囊+VD（1瓶）150粒/瓶","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1446629580291.jpeg!200","price":600.0},{"productId":"0000001156","title":"Whittaker's黑巧克力250g(1块)+cadbury白巧克力220g（1块）+Whittaker's苹果香草味巧克力100g(1块)","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451295596766.png!200","price":169.0},{"productId":"0000001155","title":"费列罗榛子巧克力球375g（1盒）+费列罗巧克力球混合版269g（1盒）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451295561114.jpeg!200","price":280.0},{"productId":"0000001154","title":"Only organic 有机磨牙棒*2+Only organic 果泥*3","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451294857119.png!200","price":249.0},{"productId":"0000001153","title":"好健康液体钙胶囊+VD150粒 + 好健康儿童聪慧鱼油 120粒 + 纽乐蔓越莓 50000 50粒","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451294543280.jpeg!200","price":448.5},{"productId":"0000001152","title":"Red Seal蜂胶牙膏*2+去烟渍牙膏*2+儿童牙膏*2","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451294132770.jpeg!200","price":188.0},{"productId":"0000001151","title":"好健康儿童聪慧鱼油120粒（1盒）+THOMPSON's儿童综合复合维生素90片（1盒）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451293927975.jpeg!200","price":328.5},{"productId":"0000001150","title":"Pro-Life 加钙羊奶片500片（1瓶）+好健康儿童聪慧鱼油 120粒（1瓶）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451293686227.jpeg!200","price":375.0},{"productId":"0000001149","title":"Equazen妈妈鱼油30粒（1盒）+百丽康美孕哺乳期黄金素 120粒（1瓶）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1451293476672.jpeg!200","price":390.0}];

const HeaderSection = (props) => {
  return (
    <View style={{flex: 1}}>
      <Banner />
      <SearchBox />
    </View>
  );
};

const Home = React.createClass({

  mixins: [TimerMixin, PageMixin],

  getInitialState() {
    let ds = new ListView.DataSource({ 
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (section1, section2) => section1 !== section2
    });
    let data = { s1: [false], s2: [] }
    return {
      data: data,
      dataSource: ds.cloneWithRowsAndSections(data),
      refreshing: false
    }
  },

  render(){
    let {dataSource} = this.state;

    return (
      <View style={styles.container}>
        <RefreshableListView
          dataSource={dataSource}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}

          onInfinite={this._fetchMore}
        />
      </View>
    )
  },

  _renderRow(data, sectionId){
    if(sectionId === 's2'){
      if(data){
        return (
          <Product 
            {...data} 
            key={data.productId}
            onPress={this._onProductPress}
          />
        );
      }else{
        return <Loading /> 
      }
    }else{
      return <HeaderSection />
    }
  },

  _renderSeparator(sectionId, rowId){
    if(sectionId === 's1'){

    }else{
      return <View style={styles.separator} key={rowId}/>
    }
  },

  _fetchMore(done){
    if(!this.state.data.s2.length)
      return;
    // 异步请求锁定
    this.setTimeout(() => {
      let newData = listData.map((item, i) => {
        return Object.assign(item, {productId: i});
      });
      this.state.data.s2.push(...newData);

      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(this.state.data)
      });
      done();
    }, 2000);
  },

  _onProductPress(productId){
    this.goto('Detail', {productId});
  },

  componentDidMount() {
    this.fetchData();
  },

  fetchData(){
    this.state.data.s2 = listData;
    // 异步请求abort问题
    this.setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(this.state.data)
      });
    }, 1000);
  },

  searchProduct(word){
    console.log(word);
  }
});

module.exports = Home;