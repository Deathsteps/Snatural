/**
 * @fileOverview Loading
 */

'use strict';

const React = require('react-native');

const {
  View,
  Platform,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  StyleSheet
} = React;

const Loading = () => {
  if(Platform.OS === 'ios'){
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS
          animating={true}
          style={styles.spinner}
          size="large"
         />
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
        <ProgressBarAndroid
          styleAttr="Inverse"
          style={styles.spinner}
         />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Loading;
