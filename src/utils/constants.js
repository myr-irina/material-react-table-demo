import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

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

export const totals = ['amount_hours', 'amount_salary'];

export const CustomSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  margin: 0,
  '& .MuiSwitch-root': {
    padding: 0,
    margin: 0,
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    // backgroundImage: `url(${RoubleIcon3})`,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // backgroundImage: `url(${RoubleIcon3})`,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
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

export const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
  'amount',
];

export const HEADER_MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
  'Всего',
];
