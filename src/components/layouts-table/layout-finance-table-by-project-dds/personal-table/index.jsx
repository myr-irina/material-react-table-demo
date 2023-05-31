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
import { MONTHS } from '../../../../utils/constants';
import RoubleIcon from '../../../../images/ruble-currency-sign.png';
import RoubleIcon2 from '../../../../images/Ruble_sign.svg';
import RoubleIcon3 from '../../../../images/ruble-svgrepo-com.svg';

const CustomSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  '& .MuiSwitch-root': {
    padding: 0,
    margin: 0,
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(26px)',
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
    // backgroundImage: `url(${RoubleIcon3})`,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // backgroundImage: `url(${RoubleIcon3})`,
    },
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

  const totals = ['amount_hours', 'amount_salary'];

  const amountsRow = data.find(({ month }) => month === 'Итого');

  return (
    // <Table
    //   stickyHeader
    //   sx={{
    //     tableLayout: 'fixed',
    //     width: '100%',
    //     margin: '0 auto',
    //   }}
    // >
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
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => {
          if (row.month === 'Итого') return;
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
    </>
  );
};

export default PersonalTable;
