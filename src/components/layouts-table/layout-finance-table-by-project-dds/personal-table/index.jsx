import React, { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { numberWithSpaces } from '../../../../utils/utils';
import { MONTHS } from '../../../../utils/constants';
import { CustomSwitch } from '../../../../utils/constants';

const PersonalTable = ({ data }) => {
  const [checked, setChecked] = useState(true);

  const amountsRow = data.find(({ month }) => month === 'Итого');

  return (
    <>
      <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <TableCell
            sx={{
              width: '250px',
            }}
            component='th'
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flexStart',
              }}
            >
              <CustomSwitch
                sx={{ m: 2 }}
                checked={!checked}
                onChange={() => setChecked(!checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />

              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '16px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                Сотрудники
              </Typography>
            </Box>
          </TableCell>

          {MONTHS.map((cell) => (
            <TableCell component='th' key={uuidv4()}>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '16px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
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
        {data.map((row) => {
          if (row.month === 'Итого') return null;
          const rowData = Object.entries(row.value);

          return (
            <TableRow key={uuidv4()}>
              <TableCell
                sx={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  width: '250px',
                }}
                key={row.month}
              >
                {row.month}
              </TableCell>
              {MONTHS.map((month) => {
                const val = rowData.find(([monthKey]) => monthKey === month);

                if (!val) return <TableCell></TableCell>;

                return (
                  <TableCell key={uuidv4()}>
                    {typeof val[1] === 'object' && checked
                      ? `${val[1].hours} ч.`
                      : `${numberWithSpaces(Math.trunc(val[1].salary))} р.`}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}

        <TableRow>
          <TableCell
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              width: '250px',
            }}
          ></TableCell>
          {MONTHS.map((month) => {
            const val = amountsRow.value[month];

            if (!val) return <TableCell></TableCell>;
            return (
              <TableCell key={uuidv4}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {val && val !== null
                    ? `${numberWithSpaces(Math.trunc(val))} р.`
                    : ''}
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </>
  );
};

export default PersonalTable;
