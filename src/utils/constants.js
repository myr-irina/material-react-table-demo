import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const colors = {
  darkRed: '#ff7d7d',
  paleRed: '#ffbdbd',
  darkGreen: '#bdfdbd',
  lightGreen: '#e4fde4',
  darkYellow: '#ffff97',
  paleYellow: '#ffffca',
};
/* https://www.htmlcsscolor.com/hex/FF0000 */

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
  { value: 'january', label: 'Январь' },
  { value: 'february', label: 'Февраль' },
  { value: 'march', label: 'Март' },
  { value: 'april', label: 'Апрель' },
  { value: 'may', label: 'Май' },
  { value: 'june', label: 'Июнь' },
  { value: 'july', label: 'Июль' },
  { value: 'august', label: 'Август' },
  { value: 'september', label: 'Сентябрь' },
  { value: 'october', label: 'Октябрь' },
  { value: 'november', label: 'Ноябрь' },
  { value: 'december', label: 'Декабрь' },
];

export const categories = [
  { value: 'incomes', label: 'Доходы' },
  { value: 'direct_contractors', label: 'Прямые подрядчики' },
  { value: 'fot_pp', label: 'Зарплата персонала' },
  { value: 'fot_aup', label: 'Зарплата руководства' },
  { value: 'other_expenses', label: 'Прочие расходы' },
  { value: 'management_company', label: 'Услуги УК' },
  { value: 'incomes_before_tax', label: 'Прибыль (Убыток) до налогообложения' },
];

export const categoriesDDS = [
  { value: 'incomes', label: 'Доходы' },
  { value: 'direct_contractors', label: 'Прямые подрядчики' },
  { value: 'agency_payments', label: 'Агентские платежи' },
  { value: 'salaries', label: 'Зарплата' },
  { value: 'bonus_fund', label: 'Бонусный фонд' },
  { value: 'tax_ndfl', label: 'Налог НДФЛ / Соцстрах' },
  { value: 'tax_nds', label: 'Налог НДС' },
  { value: 'tax_income', label: 'Налог на прибыль' },
  { value: 'management_company', label: 'Услуги УК' },
  { value: 'other_expenses', label: 'Прочие расходы' },
  { value: 'judicial_penalties', label: 'Судебные взыскания / Штрафы' },
  { value: 'old_contractors', label: 'Старые подрядчики' },
  { value: 'loans_shareholders', label: 'Займы акционеров' },
  { value: 'interest_on_loans', label: 'Процент по займам' },
  { value: 'incomes_before_tax', label: 'Прибыль (Убыток) до налогообложения' },
];
