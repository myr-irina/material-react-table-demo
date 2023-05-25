import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

import { numberWithSpaces, MONTHS } from '../../../../utils/utils';

import { totals } from '../../../../utils/constants';

import {
  StyledTableCellTableDetailedHeader,
  StyledTableCellTableDetailed,
  StyledTableCellTableDetailedBold,
} from '../../../../utils/styles';

import { CustomSwitch } from '../../../../utils/constants';

const PersonalTable = ({ data }) => {
  const [checked, setChecked] = useState(true);

  const amountsRow = data.find(({ month }) => month === 'Итого');

  return (
    <>
      <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <StyledTableCellTableDetailedHeader
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
              Сотрудники
            </Box>
          </StyledTableCellTableDetailedHeader>

          {MONTHS.map((month) => {
            const val = amountsRow.value[month];

            if (!val) return <TableCell></TableCell>;
            return (
              <StyledTableCellTableDetailedBold key={month}>
                {val && val !== null && checked
                  ? `${val.hours} ч.`
                  : !checked
                  ? `${numberWithSpaces(Math.trunc(val.salary))} р.`
                  : ''}
              </StyledTableCellTableDetailedBold>
            );
          })}

          {/* {MONTHS.map((cell, index) => (
            <TableCell component='th' key={cell}>
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
          ))} */}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => {
          if (row.month === 'Итого') return;
          const rowData = Object.entries(row.value);

          return (
            <TableRow>
              <StyledTableCellTableDetailed key={row.month}>
                {row.month}
              </StyledTableCellTableDetailed>
              {MONTHS.map((month) => {
                const val = rowData.find(([monthKey]) => monthKey === month);
                console.log({ val }, 'fdsf');

                if (!val) return <TableCell></TableCell>;

                return (
                  <StyledTableCellTableDetailed key={val}>
                    {typeof val[1] === 'object' && checked
                      ? `${val[1].hours} ч.`
                      : `${numberWithSpaces(Math.trunc(val[1].salary))} р.`}
                  </StyledTableCellTableDetailed>
                );
              })}
              {totals.map((sum) => {
                const val = rowData.find(([monthKey]) => monthKey === sum);

                if (!val) return;

                return (
                  <TableCell>
                    {val[0] === 'amount_hours' && checked
                      ? `${val[1]} ч.`
                      : val[0] === 'amount_salary' && !checked
                      ? `${numberWithSpaces(Math.trunc(val[1]))} р.`
                      : ''}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}

        <TableRow>
          <TableCell colSpan={14}></TableCell>
          {/* <TableCell
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              width: '250px',
            }}
          ></TableCell>
          {MONTHS.map((month) => {
            const val = amountsRow.value[month];

            console.log({ val });

            if (!val) return <TableCell></TableCell>;
            return (
              <StyledTableCellTableDetailedBold key={month}>
                {val && val !== null && checked
                  ? `${val.hours} ч.`
                  : !checked
                  ? `${numberWithSpaces(Math.trunc(val.salary))} р.`
                  : ''}
              </StyledTableCellTableDetailedBold>
            );
          })} */}
        </TableRow>
      </TableBody>
    </>
  );
};

export default PersonalTable;
