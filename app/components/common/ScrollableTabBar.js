/**
 * @fileOverview TabBar
 */

'use strict';

const React = require('react-native');

const styles = require('./ScrollableTabBar.style');
const {SCREEN_WIDTH} = require('../../constants/StyleConstants');

const {
  View,
  ScrollView,
  ViewPagerAndroid,
  TouchableWithoutFeedback,
  Platform,
  Animated
} = React;

let Tabbar = React.createClass({
  propTypes: {
    activeTabStyle: React.PropTypes.number, // style number
    initalActive: React.PropTypes.string, 
    tabPosition: React.PropTypes.oneOf(['top', 'bottom'])
  },

  getInitialState() {
    return {
      active: this.props.initalActive,

      _scrollValue: new Animated.Value(0)
    };
  },

  render(){
    let contents = this._createContents(this.props);
    let { topTabs, bottomTabs } = 
      this._renderTabs(this.props.tabPosition, contents.tabs);
    if(Platform.OS === 'ios'){
      return (
        <View style={styles.container}>
          {topTabs}
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            directionalLockEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.viewContainer}
            contentContainerStyle={styles.container}
            onScroll={this._onScroll}
            scrollEventThrottle={16}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            ref={viewPager => { this.viewPager = viewPager; }}>
            {contents.views}
          </ScrollView>
          {bottomTabs}
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          {topTabs}
          <ViewPagerAndroid
            style={styles.viewContainer}
            initialPage={0}
            onPageScroll={this._onPageScroll}
            onPageSelected={this._onPageSelected}
            ref={viewPager => { this.viewPager = viewPager; }}>
            {contents.views}
          </ViewPagerAndroid>
          {bottomTabs}
        </View>
      );
    }
  },

  _renderTabs(tabPosition, tabs){
    let tabContainer = (
      <View style={styles.tabContainer}>
        {tabs}
        {this._renderTabLine(tabs.length)}
      </View> 
    );
    return tabPosition === 'top' ?
      { topTabs: tabContainer}:
      { bottomTabs: tabContainer};
  },

  _renderTabLine(tabCount){
    let style = {width: SCREEN_WIDTH / tabCount};
    style.left = this.state._scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, style.width]
    });
    return <Animated.View style={[styles.tabLine, style]} />;
  },

  _onScroll(e) {
    this.state._scrollValue.setValue( e.nativeEvent.contentOffset.x / SCREEN_WIDTH )
  },
  _onMomentumScrollEnd(e) {
    let activeIndex = e.nativeEvent.contentOffset.x / SCREEN_WIDTH;
    this.setState({active: this.activeMapping[activeIndex]});
  },

  _onPageScroll(e){
    const { offset, position } = e.nativeEvent;
    this.state._scrollValue.setValue( position + offset );
  },
  _onPageSelected(e){
    console.log(e.nativeEvent.position);
    console.log(this.activeMapping[e.nativeEvent.position]);
    //this.setState({active: this.activeMapping[e.nativeEvent.position]});
  },

  _createContents(props){
    let contents = {views:[], tabs:[]};
    // build the mapping between active page index and active tab key
    this.activeMapping = [];
    let activeIndex = 0;

    React.Children.forEach(props.children, (child) => {
      if(!child) return;
      if(child.type.displayName === 'Tabbar.View'){
        this.activeMapping[activeIndex++] = child.key;
        contents.views.push(this._createView(child.key, child))
      }else{
        contents.tabs.push(this._createTab(child.key, child))
      }
    });
    return contents;
  },
  _createView(key, element){
    return (
      <View key={`view:${key}`} style={styles.view}>
        {element}
      </View>
    );
  },
  _createTab(key, element){
    return React.cloneElement(element, {
      key: `tab:${key}`,
      activeStyle: key === this.state.active ? this.props.activeTabStyle : null,
      onPress: () => {
        this._switchTo(key);
        element.props.onPress && element.props.onPress(key);
      }
    });
  },

  _switchTo(key){
    let page = 0;
    for(let index in this.activeMapping){
      if(key === this.activeMapping[index]){
        page = index;
        break;
      }
    }
    if(Platform.OS === 'ios'){
      this.viewPager.scrollTo({x: page * SCREEN_WIDTH, animated: true});
    }else{
      this.viewPager.setPage(page);
    }
    this.setState({active: key});
  }
});

Tabbar.View = React.createClass({
  displayName: 'Tabbar.View',
  render(){
    return React.Children.only(this.props.children);
  }
});

Tabbar.Tab = React.createClass({
  displayName: 'Tabbar.Tab',
  render(){
    let {onPress, activeStyle, children, style} = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[ styles.tab, style, activeStyle ]}>
          {React.Children.map(children, child => child )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

module.exports = Tabbar;
