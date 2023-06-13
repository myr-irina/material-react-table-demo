import React, { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { StyledTableCellTableDetailed } from '../../../../utils/styles';
import { numberWithSpaces } from '../../../../utils/utils';
import { MONTHS } from '../../../../utils/constants';
import { totals } from '../../../../utils/constants';
import { CustomSwitch } from '../../../../utils/constants';

const PersonalTable = ({ data }) => {
  const [checked, setChecked] = useState(true);

  const amountsRow = data.find(({ month }) => month === 'Итого');

  return (
    <>
      <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <CustomSwitch
            sx={{ ml: 2, mt: 2 }}
            checked={!checked}
            onChange={() => setChecked(!checked)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: '700',
              fontSize: '12px',
              overflowX: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            Сотрудники
          </TableCell>

          {MONTHS.map((month) => {
            const val = amountsRow.value[month];

            if (!val) return <TableCell></TableCell>;
            return (
              <TableCell
                sx={{
                  fontWeight: '700',
                  fontSize: '12px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
                key={month}
              >
                {val && val !== null && checked
                  ? `${val.hours} ч.`
                  : !checked
                  ? `${numberWithSpaces(Math.trunc(val.salary))} р.`
                  : ''}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => {
          if (row.month === 'Итого') return null;
          const rowData = Object.entries(row.value);

          return (
            <TableRow>
              <StyledTableCellTableDetailed key={row.month}>
                {row.month}
              </StyledTableCellTableDetailed>
              {MONTHS.map((month) => {
                const val = rowData.find(([monthKey]) => monthKey === month);

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

                if (!val) return null;

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
      </TableBody>
    </>
  );
};

export default PersonalTable;
