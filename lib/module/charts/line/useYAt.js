import React from 'react';
import { useLineChart } from './useLineChart';
import { LineChartDimensionsContext } from './Chart';
import { getYForX } from 'react-native-redash';
import { useDerivedValue, withTiming } from 'react-native-reanimated';
export function useYAt({
  at,
  offsetY = 0
}) {
  const {
    pointWidth,
    parsedPath,
    height,
    gutter
  } = React.useContext(LineChartDimensionsContext);
  const {
    yDomain
  } = useLineChart();
  return useDerivedValue(() => {
    if (typeof at === 'number' || at.index != null) {
      const index = typeof at === 'number' ? at : at.index;
      const yForX = getYForX(parsedPath, pointWidth * index) || 0;
      return withTiming(yForX + offsetY);
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
    return withTiming(offsetTopPixels + offsetY);
  }, [at, parsedPath, pointWidth, yDomain, height, gutter, offsetY]);
}
//# sourceMappingURL=useYAt.js.map