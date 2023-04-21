import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

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
