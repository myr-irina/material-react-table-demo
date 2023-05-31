import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Tab, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';

import { parseTableData4 } from '../../../utils/utils';
// import { categories } from '../../../utils/constants';

import AmountsTable from './amounts-table';
import PersonalTable from './personal-table';
import { numberWithSpaces } from '../../../utils/utils';

import { HEADER_MONTHS } from '../../../utils/constants';
import CustomSelect from '../../custom-select';

import {
  StyledTableCellTableDetailedHeader,
  StyledTableCellTableDetailed,
  StyledTableCellTableDetailedBold,
} from '../../../utils/styles';

function LayoutFinanceTableByProject({ data, title, isLoading, columns }) {
  const arrArrs = Object.keys(data);

  const length = arrArrs.length;
  const arrKeys = Array(length).fill(['value', 'label']);

  const getData = (arrKeys, arrArrs) => {
    return arrArrs.map((val) => ({
      [arrKeys[0][0]]: val.toString(),
      [arrKeys[0][1]]: val.toString(),
    }));
  };

  const categories = getData(arrKeys, arrArrs);

  const TABLE_DATA = useMemo(() => parseTableData4(data), [data]);

  const [category, setCategory] = React.useState(categories[0].label);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Typography mb={4} variant='h5' gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <CustomSelect
          values={categories}
          value={category}
          handleChange={handleCategoryChange}
          inputLabel='Категория'
        />
      </Box>

      {TABLE_DATA.filter((value) => {
        return value[3]?.[1]?.projectType === category;
      }).map((rowEntry) => (
        <TableContainer
          component={Paper}
          sx={{
            width: '100%',
            margin: '0 auto',
            overflowX: 'initial',
          }}
        >
          <Table
            stickyHeader
            size='medium'
            sx={{
              tableLayout: 'fixed',
              width: '100%',
              margin: '0 auto 20px',
              '& .MuiTableCell-root': {
                padding: '12px',
              },
              '& .MuiTableCell-root:first-of-type': {
                width: '250px',
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {HEADER_MONTHS.map((month) => (
                  <StyledTableCellTableDetailedHeader key={month}>
                    {month}
                  </StyledTableCellTableDetailedHeader>
                ))}
              </TableRow>
            </TableHead>
            {rowEntry.map((row) => {
              const amountsRow = row?.find(({ month }) => month === 'Итого');

              if (!row) return;
              if (row[0]?.projectName === 'Сотрудники')
                return <PersonalTable data={row} />;
              if (row[0]?.projectName === 'Итого')
                return <AmountsTable data={row} />;

              return (
                <TableBody>
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
                        {row[0]?.projectName}
                      </Typography>
                    </TableCell>

                    {HEADER_MONTHS.map((month) => {
                      const val = amountsRow?.value[month];

                      if (!val) return <TableCell></TableCell>;
                      return (
                        <TableCell key={month}>
                          <Typography
                            sx={{
                              fontWeight: '700',
                              fontSize: '12px',
                              overflowX: 'hidden',
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {val && val !== null
                              ? `${numberWithSpaces(Math.trunc(val))} р.`
                              : ''}
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>

                  {row.map((tableRow) => {
                    if (tableRow.month === 'Итого') return;
                    return (
                      <TableRow>
                        <StyledTableCellTableDetailed key={tableRow.month}>
                          {tableRow.month}
                        </StyledTableCellTableDetailed>

                        {HEADER_MONTHS.map((month) => {
                          const val = tableRow?.value?.[month];

                          return (
                            <StyledTableCellTableDetailed key={month}>
                              {val ? `${numberWithSpaces(val)} р.` : ''}
                            </StyledTableCellTableDetailed>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      ))}
    </>
  );
}

export default LayoutFinanceTableByProject;
