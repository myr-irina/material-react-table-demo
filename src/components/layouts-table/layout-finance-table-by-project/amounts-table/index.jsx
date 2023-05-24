import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

import {
  numberWithSpaces,
  MONTHS,
  findProjectByName2,
} from '../../../../utils/utils';

import {
  StyledTableCellTableDetailedHeader,
  StyledTableCellTableDetailedBold,
} from '../../../../utils/styles';

const AmountsTable = ({ data }) => {
  return (
    <>
      <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <StyledTableCellTableDetailedHeader>
            Общая сумма
          </StyledTableCellTableDetailedHeader>
          {MONTHS.map((cell) => (
            <TableCell component='th' key={cell}>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '14px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  color: 'transparent',
                }}
              >
                {cell}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow
          sx={{
            '&:last-child td, &:last-child th': {
              border: 0,
            },
            '&:last-child td': {
              fontWeight: 600,
            },
          }}
        >
          <TableCell></TableCell>
          {MONTHS.map((cell) => {
            const val = findProjectByName2(cell, data);

            return (
              <StyledTableCellTableDetailedBold>
                {val && val.value !== null
                  ? `${numberWithSpaces(val.value)} р.`
                  : ''}
              </StyledTableCellTableDetailedBold>
            );
          })}
        </TableRow>
      </TableBody>
    </>
  );
};

export default AmountsTable;
