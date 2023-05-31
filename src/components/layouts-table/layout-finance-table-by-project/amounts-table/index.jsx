import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

import { numberWithSpaces, findProjectByName2 } from '../../../../utils/utils';

import { MONTHS } from '../../../../utils/constants';

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
              Итого
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
