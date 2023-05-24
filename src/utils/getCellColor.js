import { colors } from './constants';

const getCellColor = (value) => {
  return value < 25
    ? colors['darkBlue']
    : value >= 25 && value < 50
    ? colors['blue']
    : value >= 50 && value < 75
    ? colors['lightBlue']
    : value >= 75 && value < 90
    ? colors['lightGreen']
    : value >= 90 && value < 100
    ? colors['green']
    : value == 100
    ? colors['darkGreen']
    : value > 100 && value < 110
    ? colors['green']
    : value >= 110 && value < 125
    ? colors['lightGreen']
    : value >= 125 && value < 150
    ? colors['lightRed']
    : value >= 150 && value < 175
    ? colors['red']
    : colors['darkRed'];
};

export { getCellColor };
