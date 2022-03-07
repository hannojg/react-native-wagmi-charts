function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { Line as SVGLine } from 'react-native-svg';
import { LineChartDimensionsContext } from './Chart';
import { useYAt } from './useYAt';
const AnimatedLine = Animated.createAnimatedComponent(SVGLine);
LineChartHorizontalLine.displayName = 'LineChartHorizontalLine';
export function LineChartHorizontalLine({
  color = 'gray',
  lineProps = {},
  at = {
    index: 0
  },
  offsetY = 0
}) {
  const {
    width
  } = React.useContext(LineChartDimensionsContext);
  const y = useYAt({
    at,
    offsetY
  });
  const lineAnimatedProps = useAnimatedProps(() => ({
    x1: 0,
    x2: width,
    y1: y.value,
    y2: y.value
  }));
  return /*#__PURE__*/React.createElement(AnimatedLine, _extends({
    animatedProps: lineAnimatedProps,
    strokeWidth: 2,
    stroke: color,
    strokeDasharray: "3 3"
  }, lineProps));
}
//# sourceMappingURL=HorizontalLine.js.map