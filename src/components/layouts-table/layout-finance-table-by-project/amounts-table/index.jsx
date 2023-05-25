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
      <TableBody sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <TableCell>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '12px',
                overflowX: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              Общая сумма
            </Typography>
          </TableCell>

          {MONTHS.map((cell) => {
            const val = findProjectByName2(cell, data);

            return (
              <TableCell
                sx={{
                  fontWeight: '700',
                  fontSize: '12px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {val && val.value !== null
                  ? `${numberWithSpaces(val.value)} р.`
                  : ''}
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </>
  );
};

export default AmountsTable;
