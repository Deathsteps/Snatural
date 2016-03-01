'use strict';

const React = require('react-native');

const {
  StyleSheet
} = React;

const Icon = require('react-native-vector-icons/MaterialIcons');

const RadioButton = (props) => {
  if (props.selected) {
    return <Icon name="checkmark-circled" style={styles.checked} />
  } else {
    return <Icon name="ios-circle-outline" style={styles.unchecked} />
  }
};

const styles = StyleSheet.create({

});

module.exports = RadioButton;
