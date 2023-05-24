import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const colors = {
  darkRed: '#F27A83',
  red: '#F6A1A8',
  lightRed: '#FAC0C9',
  darkGreen: '#37BC94',
  green: '#79CDB1',
  lightGreen: '#91DDC3',
  darkBlue: '#94D1F3',
  blue: '#BBE4FB',
  lightBlue: '#D4EFFE',
};

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
    backgroundColor: 'lightGrey',
    fontWeight: 600,
  },
}));

//bdr dds custom styles
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',
  },
}));

export const StyledTableRow2 = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:last-child td': {
    backgroundColor: theme.palette.action.hover,
    fontWeight: 600,
  },
}));

export const StyledTableRow3 = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    // border: 0,
  },
  '&:last-child td': {
    backgroundColor: theme.palette.action.hover,
    fontWeight: 600,
    fontSize: 16,
  },
}));

export const months = [
  { value: 'Январь', label: 'Январь' },
  { value: 'Февраль', label: 'Февраль' },
  { value: 'Март', label: 'Март' },
  { value: 'Апрель', label: 'Апрель' },
  { value: 'Май', label: 'Май' },
  { value: 'Июнь', label: 'Июнь' },
  { value: 'Июль', label: 'Июль' },
  { value: 'Август', label: 'Август' },
  { value: 'Сентябрь', label: 'Сентябрь' },
  { value: 'Октябрь', label: 'Октябрь' },
  { value: 'Ноябрь', label: 'Ноябрь' },
  { value: 'Декабрь', label: 'Декабрь' },
];

export const categories = [
  { value: 'Доходы', label: 'Доходы' },
  { value: 'Прямые подрядчики', label: 'Прямые подрядчики' },
  { value: 'ФОТ ПП', label: 'Зарплата персонала' },
  { value: 'ФОТ АУП', label: 'Зарплата руководства' },
  { value: 'Прочие расходы', label: 'Прочие расходы' },
  { value: 'Управляющая компания', label: 'Услуги УК' },
  {
    value: 'Доходы до уплаты налогов',
    label: 'Доходы до уплаты налогов',
  },
];

export const categoriesDDS = [
  { value: 'Доходы', label: 'Доходы' },
  { value: 'Прямые подрядчики', label: 'Прямые подрядчики' },
  { value: 'Агентские платежи', label: 'Агентские платежи' },
  { value: 'Зарплата', label: 'Зарплата' },
  { value: 'Бонусный фонд', label: 'Бонусный фонд' },
  { value: 'Налог НДФЛ / Соцстрах', label: 'Налог НДФЛ / Соцстрах' },
  { value: 'Налог НДС', label: 'Налог НДС' },
  { value: 'Налог на прибыль', label: 'Налог на прибыль' },
  { value: 'Услуги УК', label: 'Услуги УК' },
  { value: 'Прочие расходы', label: 'Прочие расходы' },
  {
    value: 'Судебные взыскания / Штрафы',
    label: 'Судебные взыскания / Штрафы',
  },
  { value: 'Старые подрядчики', label: 'Старые подрядчики' },
  { value: 'Займы акционеров', label: 'Займы акционеров' },
  { value: 'Процент по займам', label: 'Процент по займам' },
];
