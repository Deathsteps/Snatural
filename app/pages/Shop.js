'use strict';

const React = require('react-native');

const {
  View,
  Text,
  Image,
  Alert
} = React;

const { fetchShopInfo } = require('../services/shopService');

const styles = require('./Shop.style');

const PageMixin = require('./PageMixin');
const Avatar = require('../components/Avatar');
const IconButton = require('../components/common/IconButton');

let shopData = {"memberId":3,"faceUrl":"http://zxs-image.b0.upaiyun.com/shop/1454433211636940.jpeg","name":"棉花爹的店铺","notice":"请设置公告","coverUrl":"http://zxs-image.b0.upaiyun.com/shop/1454433225344651.jpeg","createTime":1448454249000,"updateTime":1454433225000,"operator":"3"};
let funcData = [
  { title: "店铺设置", color: '#98d1ad', target: 'OrderList', icon: 'settings'},
  { title: "分享店铺", color: '#98d1ad', target: 'OrderList', icon: 'share'},
  { title: "查看店铺", color: '#98d1ad', target: 'OrderList', icon: 'search'}
];

const Shop = React.createClass({

  mixins: [PageMixin],

  getInitialState() {
    return {

    }
  },

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <Image 
            style={styles.cover}
            source={{uri: shopData.coverUrl}}>
            <Avatar
              style={styles.avatar}
              imageUrl={shopData.faceUrl}/>
            <View style={styles.desc}>
              <Text style={styles.name}>{shopData.name}</Text>
              <Text style={styles.notice}>{shopData.notice}</Text>
            </View>
          </Image>

          <View style={styles.functions}>
            {funcData.map((item, i) => {
              return (
                <IconButton
                  key={i}
                  icon={item.icon}
                  iconColor={item.color}
                  text={item.title}
                  wrapStyle={styles.iconButton}
                  iconStyle={styles.iconStyle}
                  onPress={() => this.goto(item.target)}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.contents}>
        </View>

        {this._renderNavigatorBar()}
      </View>
    )
  },

  componentDidMount(){
    let params = {"sign":"136af6d342e9da6feca3c552072f059f","data":{"oneMemberId":"3","memberId":3,"token":"51b99f6a0fe680356af1494842f3f9b0"},"appKey":"412f919f9a49352e"};
    fetchShopInfo(params, 
      (err, data) => {
        if(err){
          Alert.alert(
            'Service Error',
            err.message,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')}
            ]
          );
          return;
        }

        console.log(data);
      })
  }

})

module.exports = Shop;
