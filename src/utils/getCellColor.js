import { colors } from './constants';

const getCellColor = (value) => {
  return value < 45
    ? colors['paleYellow']
    : value >= 45 && value < 90
    ? colors['darkYellow']
    : value >= 90 && value < 100
    ? colors['lightGreen']
    : value == 100
    ? colors['darkGreen']
    : value >= 110 && value < 130
    ? colors['paleRed']
    : colors['darkRed'];
};

export { getCellColor };
