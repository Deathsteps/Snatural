/**
 * @fileOverview 入口页
 */

'use strict';

const React = require('react-native');

const {
  View,
  Text
} = React;

const Icon = require('react-native-vector-icons/MaterialIcons')

const styles = require('./Index.style');

const TabBar = require('../components/common/TabBar');
const Home = require('./Home');
const Me = require('./Me');

const Index = (props) => {
  let {navigator, routes} = props;
  return (
    <TabBar initalActive="home" activeTabStyle={styles.activeTab}>
      <TabBar.View key="home">
        <Home navigator={navigator} routes={routes}/>
      </TabBar.View>
      <TabBar.View key="me">
        <Me navigator={navigator} routes={routes}/>
      </TabBar.View>
      <TabBar.Tab key="home" style={styles.tab}>
        <Icon name="home" style={styles.tabIcon} />
        <Text style={styles.tabText}>首页</Text>
      </TabBar.Tab>
      <TabBar.Tab key="me" style={styles.tab}>
        <Icon name="person" style={styles.tabIcon} />
        <Text style={styles.tabText}>我的</Text>
      </TabBar.Tab>
    </TabBar>
  );
};

module.exports = Index;