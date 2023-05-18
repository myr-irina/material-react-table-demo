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

const AmountsTable = ({ data }) => {
  return (
    // <Table
    //   sx={{
    //     tableLayout: 'fixed',
    //     '& .MuiTableCell-root:first-of-type': {
    //       width: '250px',
    //     },
    //   }}
    // >
    <>
      <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <TableCell>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '16px',
                overflowX: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              Общая сумма
            </Typography>
          </TableCell>
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
              <TableCell>
                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {val && val.value !== null
                    ? `${numberWithSpaces(val.value)} р.`
                    : ''}
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </>
    // </Table>
  );
};

export default AmountsTable;
