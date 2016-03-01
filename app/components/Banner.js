/**
 * @fileOverview 广告Banner
 */

'use strict';

const React = require('react-native');

const {
  View,
  Image
} = React;

const styles = require('./Banner.style');

const ImageSlider = require('./common/ImageSlider');

let data = [{"imageUrl":"http://zxs-image.b0.upaiyun.com/icon/1452680099244.png!415","pageType":0,"value":null},{"imageUrl":"http://zxs-image.b0.upaiyun.com/icon/1451460634217.png!415","pageType":2,"value":"4"},{"imageUrl":"http://zxs-image.b0.upaiyun.com/icon/1451461782194.png!415","pageType":0,"value":null},{"imageUrl":"http://zxs-image.b0.upaiyun.com/icon/1451461771375.png!415","pageType":0,"value":null}]

const Banner = (props) => {
  return (
    <View style={styles.container}>
      <ImageSlider>
        {data.map((item, i) => {
          return (
            <Image 
              key={'banner_'+i}
              source={{uri: item.imageUrl}}
              style={styles.image}
            />
          );
        })}
      </ImageSlider>
    </View>
  )
};

module.exports = Banner;