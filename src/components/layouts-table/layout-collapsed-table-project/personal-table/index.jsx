import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import { numberWithSpaces, MONTHS } from '../../../../utils/utils';

const CustomSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
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

const PersonalTable = ({ data }) => {
  const [checked, setChecked] = useState(true);

  const MONTHS_ARRAY = MONTHS.filter((month) => month !== 'amount');

  const months = [
    ...Object.keys(data.find((row) => row.month === 'amounts').value),
  ].filter((key) => key !== 'amount');

  const totals = ['amount_hours', 'amount_salary'];

  const amountsRow = data.find(({ month }) => month === 'amounts');

  return (
    <TableContainer
      sx={{
        width: '100%',
        margin: '0 auto',
        overflowX: 'initial',
      }}
    >
      <Table
        stickyHeader
        sx={{
          tableLayout: 'fixed',
          width: '100%',
          margin: '0 auto',
          '& .MuiTableCell-root:first-of-type': {
            // backgroundColor: 'pink',
            // minWidth: '250px',
          },
          // '& .MuiTableCell-head:first-of-type': {
          //   width: '250px',
          //   backgroundColor: 'pink',
          // },
          // '& .MuiTableCell-body:first-of-type': {
          //   width: '250px',
          //   backgroundColor: 'pink',
          // },
        }}
      >
        <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <TableRow
            sx={{ '&:first-child td, &:first-child th': { width: '250px' } }}
          >
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

            {MONTHS.map((cell, index) => (
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
            ))}
            {/* <TableCell sx={{ fontWeight: 'bold' }}>Итого</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            if (row.month === 'amounts') return;
            const rowData = Object.entries(row.value);

            return (
              <TableRow>
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
                    <TableCell key={val}>
                      {typeof val[1] === 'object' && checked
                        ? `${val[1].hours} ч.`
                        : `${numberWithSpaces(Math.trunc(val[1].salary))} р.`}
                    </TableCell>
                  );
                })}
                {/* {totals.map((sum) => {
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
                })} */}
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
                <TableCell key={month}>
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
      </Table>
    </TableContainer>
  );
};

export default PersonalTable;
