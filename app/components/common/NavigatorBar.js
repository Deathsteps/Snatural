/**
 * @fileOverview Loading
 */

'use strict';

const React = require('react-native');

const {
  View
} = React;

const styles = require('./NavigatorBar.style');
const IconButton = require('./IconButton');

const NavigatorBar = (props) => {
  let {onBack} = props;
  return (
    <View style={styles.container}>
      <IconButton
        onPress={onBack}        
        icon="chevron-left"
        text="返回"
        mode="feedback"
        wrapStyle={styles.back}
        iconStyle={styles.backIcon}
        textStyle={styles.backText}
      />
    </View>
  );
};

module.exports = NavigatorBar;