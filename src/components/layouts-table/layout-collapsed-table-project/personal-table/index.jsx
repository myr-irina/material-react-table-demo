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

import { numberWithSpaces } from '../../../../utils/utils';

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

  const months = [
    ...Object.keys(data.find((row) => row.month === 'amounts').value),
  ].filter((key) => key !== 'amount');

  const amountsRow = data.find(({ month }) => month === 'amounts');

  return (
    <Table
      stickyHeader
      sx={{
        tableLayout: 'fixed',
        margin: '0 auto',
        width: '100%',
        '& .MuiTableCell-root:first-of-type': {
          width: '170px',
        },
      }}
      // size='small'
    >
      <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CustomSwitch
              sx={{ m: 1 }}
              checked={!checked}
              onChange={() => setChecked(!checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '18px',
                overflowX: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                padding: '6px 16px 0',
              }}
            >
              Сотрудники
            </Typography>
          </Box>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          {months.map((cell) => (
            <TableCell component='th' key={cell}>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '14px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  color: 'black',
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
          if (row.month === 'amounts') return;
          const rowData = Object.entries(row.value);
          return (
            <TableRow>
              <TableCell>{row.month}</TableCell>
              {months.map((month) => {
                const val = rowData.find(([monthKey]) => monthKey === month);
                console.log({ val });
                if (!val) return <TableCell></TableCell>;
                return (
                  <TableCell>
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
          <TableCell></TableCell>
          {months.map((month) => {
            const val = Object.entries(amountsRow.value).find(
              ([monthKey]) => monthKey === month
            );

            if (!val) return <TableCell></TableCell>;
            return (
              <TableCell>
                <Typography sx={{ fontWeight: 'bold' }}>
                  {numberWithSpaces(Math.trunc(val[1]))}
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PersonalTable;
