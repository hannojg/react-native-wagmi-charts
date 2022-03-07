"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useYAt = useYAt;

var _react = _interopRequireDefault(require("react"));

var _useLineChart = require("./useLineChart");

var _Chart = require("./Chart");

var _reactNativeRedash = require("react-native-redash");

var _reactNativeReanimated = require("react-native-reanimated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useYAt({
  at,
  offsetY = 0
}) {
  const {
    pointWidth,
    parsedPath,
    height,
    gutter
  } = _react.default.useContext(_Chart.LineChartDimensionsContext);

  const {
    yDomain
  } = (0, _useLineChart.useLineChart)();
  return (0, _reactNativeReanimated.useDerivedValue)(() => {
    if (typeof at === 'number' || at.index != null) {
      const index = typeof at === 'number' ? at : at.index;
      const yForX = (0, _reactNativeRedash.getYForX)(parsedPath, pointWidth * index) || 0;
      return (0, _reactNativeReanimated.withTiming)(yForX + offsetY);
    }
    /**
     * <gutter>
     * | ---------- | <- yDomain.max  |
     * |            |                 | offsetTop
     * |            | <- value        |
     * |            |
     * |            | <- yDomain.min
     * <gutter>
     */


    const offsetTop = yDomain.max - at.value;
    const percentageOffsetTop = offsetTop / (yDomain.max - yDomain.min);
    const heightBetweenGutters = height - gutter * 2;
    const offsetTopPixels = gutter + percentageOffsetTop * heightBetweenGutters;
    return (0, _reactNativeReanimated.withTiming)(offsetTopPixels + offsetY);
  }, [at, parsedPath, pointWidth, yDomain, height, gutter, offsetY]);
}
//# sourceMappingURL=useYAt.js.map