'use strict';

const React = require('react-native');

const {
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} = React;

const styles = require('./Detail.style');

const PageMixin = require('./PageMixin');

let data = {"productId":"0000000984","title":"Thompson's汤普森 复合维生素B 60片/瓶","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448553895054.jpeg","price":200.0,"isCollect":false,"collectCount":0,"brand":{"brandId":17,"brandName":"THOMPSON'S","logo":"http://zxs-image.b0.upaiyun.com/brand/1448448845648.png","imageUrl":null},"detail":[{"name":"产地","value":"新西兰"},{"name":"作用","value":"环节焦虑疲劳、维持正常营养均衡"},{"name":"规格","value":"0.2"},{"name":"食用方法","value":"每天2次，每次1片，随餐服用"}],"detailImages":[{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525564119.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525569645.jpeg!415","width":742,"height":819},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525573130.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525576764.jpeg!415","width":742,"height":819},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525582433.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525589150.jpeg!415","width":742,"height":819},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525593013.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525597472.jpeg!415","width":742,"height":819},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525625241.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525630518.jpeg!415","width":742,"height":819},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525634171.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525637904.jpeg!415","width":742,"height":819},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525642436.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525645946.jpeg!415","width":742,"height":819},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525649217.jpeg!415","width":742,"height":820},{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448525652583.jpeg!415","width":742,"height":819}],"slideImages":[{"imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448553895054.jpeg!415","width":500,"height":500}],"stock":100,"providerId":2,"providerName":"海外发货","status":2};

const Product = (props) => {
  let {productId, title, imageUrl, price, collectCount, stock} = props;
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: imageUrl}} 
          style={styles.image}
        />
      </View>
      <View style={styles.desc}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>￥ {price}</Text>
        <View style={styles.others}>
          <Text style={styles.stock}>剩余 {stock} 件</Text>
          <View style={styles.fav}>
            <Text style={styles.favCount}>喜欢 {collectCount}</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

const Brand = (props) => {
  let {brandId, brandName, logo} = props;
  return (
    <View style={styles.brand}>
      <Image 
        source={{uri: logo}} 
        style={styles.logo}
      />
      <Text style={styles.name}>{brandName}</Text>
    </View>
  );
};

const Detail = React.createClass({

  mixins: [PageMixin],

  render(){
    let {params} = this.props;
    
    let actionBar = this._renderNavigatorBar();

    return (
      <View style={styles.container}>
        <Product {...data}/>
        <Brand {...data.brand}/>
        <View style={styles.detail}></View>
        {actionBar}
      </View>
    )
  }
});

module.exports = Detail;
