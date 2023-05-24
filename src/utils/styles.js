import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Box } from '@mui/material';

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
  '&:last-child td': {
    backgroundColor: theme.palette.action.hover,
    fontWeight: 600,
    fontSize: 12,
  },
}));

/* ------------------------- */

/* emplyees general styles */

export const StyledBoxWithData = styled(Box)(({ theme, customColor }) => ({
  borderRadius: '0.25rem',
  color: 'black',
  fontSize: '11px',
  padding: '0.2rem',
  fontWeight: 600,
  display: 'flex',
  flexDirection: 'column',
}));

/* employees by project styles */

/* ------------------------------------- */

export const StyledTableCellTotalTable = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

export const StyledTableRowTotalTable = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:last-child td': {
    backgroundColor: 'lightGrey',
    fontWeight: 600,
  },
}));

export const StyledTableCellTableDetailed = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

export const StyledTableCellTableDetailedBold = styled(TableCell)(
  ({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 11,
      fontWeight: 700,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  })
);

export const StyledTableCellTableDetailedHeader = styled(TableCell)(
  ({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: 12,
      fontWeight: 700,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  })
);

export const StyledTableRowTableDetailed = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:last-child td': {
    backgroundColor: 'lightGrey',
    fontWeight: 600,
  },
}));
