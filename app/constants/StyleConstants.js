const React = require('react-native');

let {
  width: screenWidth,
  height: screenHeight
} = React.Dimensions.get('window');

exports.SCREEN_WIDTH = screenWidth;
exports.SCREEN_HEIGHT = screenHeight;

exports.COLOR_PRICE = '#fd8e56';
exports.COLOR_BORDER = '#e8e8e8';
exports.COLOR_BACKGROUND = '#f1f1f1';
exports.COLOR_LIGHT = '#f0f9f4';
exports.COLOR_DARK = '#76b68c';
exports.COLOR_MAIN = '#98d1ad';

exports.FONT_ICON = 26;
exports.FONT_X_SIZE = 22;
exports.FONT_L_SIZE = 18;
exports.FONT_M_SIZE = 16;
exports.FONT_S_SIZE = 12;

exports.PADDING_X_SIZE = 20;
exports.PADDING_L_SIZE = 15;
exports.PADDING_M_SIZE = 10;
exports.PADDING_S_SIZE = 5;

exports.BORDER_RADIUS = 8;

exports.HEIGHT_BAR = 48;

// Grid System
let unitWidth = screenWidth / 12;
let cols = [0];
for (let i = 1; i < 13; i++){
  cols.push( i * unitWidth);
}
exports.COLS = cols;