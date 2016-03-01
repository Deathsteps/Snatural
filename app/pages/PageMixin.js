const React = require('react-native');

const NavigatorBar = require('../components/common/NavigatorBar');

module.exports = {
  
  goto(pageKey, params = {}){
    let {navigator, routes} = this.props;
    let nextRoute = Object.assign(
      {passProps: {routes, params }},
      routes[pageKey]
    );
    navigator.push(nextRoute);
  },

  goBack(){
    let {navigator} = this.props;
    navigator.pop();
  },

  _renderNavigatorBar(){
    return (
      <NavigatorBar onBack={() => this.goBack()}/>
    );
  }
}