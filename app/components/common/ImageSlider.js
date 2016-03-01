/**
 * @fileOverview 图片轮播 ImageSlider
 * @description inspired by https://github.com/nick/react-native-carousel
 */

'use strict';

const React = require('react-native');

const {
  View,
  Text,
  ScrollView,
  ViewPagerAndroid,
  Platform
} = React;

const TimerMixin = require('react-timer-mixin');
const styles = require('./ImageSlider.style');
const INDICATOR_SIZE = styles.INDICATOR_SIZE;
const { SCREEN_WIDTH } = require('../../constants/StyleConstants');

const ImageSlider = React.createClass({
  mixins: [TimerMixin],

  getInitialState(){
    return {
      activePage: 0
    }
  },

  componentDidMount(){
    this.start();
  },

  start(){
    let count = this.props.children.length;
    this.setInterval(
      () => {
        this._goto(
          this.state.activePage >= (count-1) ? 0 :
            (this.state.activePage +　1)
        )
      }, 5000
    )
  },

  render(){
    let content =
      Platform.OS === 'ios' ?
        this._renderIOS(this.props) :
        this._renderAndroid(this.props);
    return (
      <View style={styles.container}>
        {content}
        {this._renderIndicators(this.props)}
      </View>
    );
  },

  _renderIOS(props){
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={styles.container}
        onMomentumScrollEnd={this._onMomentumScrollEnd}
        ref={viewPager => { this.viewPager = viewPager; }}>
        {this._children(props.children)}
      </ScrollView>
    );
  },

  _renderAndroid(props){
    return (
      <ViewPagerAndroid
        style={styles.container}
        initialPage={0}
        onPageSelected={this._onPageSelected}
        ref={viewPager => { this.viewPager = viewPager; }}>
        {this._children(props.children)}
      </ViewPagerAndroid>
    );
  },

  _children(children){
    return React.Children.map(children, (child, i) =>{
      return (
        <View key={'page_'+i} style={styles.page}>
          {child}
        </View>
      );
    });
  },

  _renderIndicators(props) {
    let activePage = this.state.activePage;
    let indicators = [];
    for(let i = 0, l = props.children.length; i < l; i++){
      indicators.push(
        <Text
          key={'indicator_' + i}
          onPress={() => this._goto(i)}
          style={[styles.indicator, activePage === i ? styles.activeIndicator : null]}>
          &bull;
        </Text>
      );
    }

    let position = {left: (SCREEN_WIDTH - props.children.length * INDICATOR_SIZE)/2}
    return (
      <View style={[styles.indicatorContainer, position]}>
        {indicators}
      </View>
    );
  },

  _goto(page){
    if(Platform.OS === 'ios'){
      this.viewPager.scrollTo(0, page * SCREEN_WIDTH);
    }else{
      this.viewPager.setPage(page);
    }
    this.setState({activePage: page});
  },

  _onMomentumScrollEnd(e) {
    let activePage = e.nativeEvent.contentOffset.x / SCREEN_WIDTH;
    this.setState({activePage});
  },

  _onPageSelected(e){
    this.setState({activePage: e.nativeEvent.position});
  }
});

module.exports = ImageSlider;
