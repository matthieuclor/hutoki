import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size) => size * PixelRatio.getFontScale();

function dimensions({t, r, b, l}, property) {
  let styles = {};

  styles[`${property}Top`] = t;
  styles[`${property}Right`] = r;
  styles[`${property}Bottom`] = b;
  styles[`${property}Left`] = l;

  return styles;
}

export function margin({t = 0, r = 0, b = 0, l = 0, x, y}) {
  x ? (l = r = x) : null;
  y ? (t = b = y) : null;
  return dimensions({t, r, b, l}, 'margin');
}

export function padding({t = 0, r = 0, b = 0, l = 0, x, y}) {
  x ? (l = r = x) : null;
  y ? (t = b = y) : null;
  return dimensions({t, r, b, l}, 'padding');
}

export function boxShadow(
  color,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
