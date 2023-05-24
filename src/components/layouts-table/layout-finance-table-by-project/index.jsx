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

import { parseTableData4 } from '../../../utils/utils';
// import { categories } from '../../../utils/constants';

import AmountsTable from './amounts-table';
import PersonalTable from './personal-table';
import { numberWithSpaces, MONTHS, HEADER_MONTHS } from '../../../utils/utils';
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
  // console.log({ TABLE_DATA });
  const [category, setCategory] = React.useState(categories[0].label);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
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
      <Typography mb={4} variant='h5' gutterBottom>
        {title}
      </Typography>

      {TABLE_DATA.filter((value) => {
        return value[3]?.[1]?.projectType === category;
      }).map((rowEntry) => (
        <TableContainer
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
              margin: '0 auto',
              '& .MuiTableCell-root:first-of-type': {
                width: '250px',
              },
            }}
          >
            <TableHead>
              <TableRow sx={{ width: '100%' }}>
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
                <>
                  <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <TableRow>
                      <StyledTableCellTableDetailedHeader
                        key={row[0]?.projectName}
                      >
                        {row[0]?.projectName}
                      </StyledTableCellTableDetailedHeader>

                      {HEADER_MONTHS.map((cell) => (
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
                    {row.map((tableRow) => {
                      if (tableRow.month === 'Итого') return;
                      return (
                        <TableRow>
                          <StyledTableCellTableDetailed
                            sx={{
                              '&:first-of-type': {
                                textAlign: 'right',
                              },
                            }}
                            key={tableRow.month}
                          >
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

                    <TableRow>
                      <TableCell></TableCell>
                      {HEADER_MONTHS.map((month) => {
                        const val = amountsRow?.value[month];

                        if (!val) return <TableCell></TableCell>;
                        return (
                          <StyledTableCellTableDetailedBold key={month}>
                            {val && val !== null
                              ? `${numberWithSpaces(Math.trunc(val))} р.`
                              : ''}
                          </StyledTableCellTableDetailedBold>
                        );
                      })}
                    </TableRow>
                  </TableBody>
                </>
              );
            })}
          </Table>
        </TableContainer>
      ))}
    </>
  );
}

export default LayoutFinanceTableByProject;
