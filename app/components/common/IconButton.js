'use strict';

const React = require('react-native');

const {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet
} = React;

const Icon = require('react-native-vector-icons/MaterialIcons');
// Icon.Button

const defaultRenderIcon = (props) => {
  let {icon, iconColor, iconStyle, iconViewStyle} = props;
  // support borderRadius badly
  // see issue in https://github.com/facebook/react-native/issues/5261
  if(iconViewStyle){
    return (
      <View style={iconViewStyle}>
        <Icon style={[styles.icon, iconStyle]} name={icon} color={iconColor}/>
      </View>
    );
  }else{
    return <Icon style={[styles.icon, iconStyle]} name={icon} color={iconColor}/>;
  }
}
const defaultRenderText = (props) => {
  let {text, textStyle} = props;
  return <Text style={[styles.text, textStyle]}>{text}</Text>
}

const IconButton = (props) => {
  let { onPress, wrapStyle, mode } = props;
  let renderIcon = props.renderIcon || defaultRenderIcon;
  let renderText = props.renderText || defaultRenderText;
  if(mode === 'label'){
    return (
      <View style={[styles.container, wrapStyle]}>
        {renderIcon(props)}
        {renderText(props)}
      </View>
    );
  }else if(mode === 'feedback'){
    return (
      <TouchableHighlight
        style={[styles.container, wrapStyle]}
        onPress={onPress}
        underlayColor="#B5B5B5">
        <View style={[styles.container, wrapStyle]}>
          {renderIcon(props)}
          {renderText(props)}
        </View>
      </TouchableHighlight>
    );
  }else{  
    return (
      <TouchableWithoutFeedback
        style={[styles.container, wrapStyle]}
        onPress={onPress}>
        <View style={[styles.container, wrapStyle]}>
          {renderIcon(props)}
          {renderText(props)}
        </View>
      </TouchableWithoutFeedback>
    );
  } 
}

/* Styles */

const {
  FONT_ICON,
  FONT_M_SIZE,
  PADDING_S_SIZE
} = require('../../constants/StyleConstants');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: FONT_ICON,
    width: FONT_ICON,
    textAlign: 'center'
  },
  text: {
    fontSize: FONT_M_SIZE,
    paddingLeft: PADDING_S_SIZE,
    alignSelf: 'center',
    flex: 1
  }
});

module.exports = IconButton;
