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
import { numberWithSpaces, HEADER_MONTHS } from '../../../utils/utils';
import CustomSelect from '../../custom-select';

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
      <Typography variant='h5' gutterBottom mb={4}>
        {title}
      </Typography>

      {TABLE_DATA.filter((value) => {
        return value[0]?.[0]?.projectType === category;
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
                  <TableCell key={month}>
                    <Typography
                      sx={{
                        fontWeight: '700',
                        fontSize: '16px',
                        overflowX: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        '&:last-child td': { color: 'transparent' },
                      }}
                    >
                      {month}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {rowEntry.map((row) => {
              const amountsRow = row?.find(({ month }) => month === 'Сумма');
              console.log({ amountsRow });
              if (!row) return;
              if (row[0]?.projectName === 'Сотрудники')
                return <PersonalTable data={row} />;
              if (row[0]?.projectName === 'Итого')
                return <AmountsTable data={row} />;

              return (
                <>
                  <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <TableRow>
                      <TableCell key={row[0]?.projectName}>
                        <Typography
                          sx={{
                            fontWeight: '700',
                            fontSize: '16px',
                            overflowX: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {row[0]?.projectName}
                        </Typography>
                      </TableCell>

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
                      if (tableRow.month === 'Сумма') return;
                      return (
                        <TableRow>
                          <TableCell
                            key={tableRow.month}
                            sx={{
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {tableRow.month}
                          </TableCell>

                          {HEADER_MONTHS.map((month) => {
                            const val = tableRow?.value?.[month];

                            return (
                              <TableCell key={month}>
                                {val ? `${numberWithSpaces(val)} р.` : ''}
                              </TableCell>
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
                          <TableCell key={month}>
                            <Typography
                              sx={{ fontWeight: 'bold', fontSize: '14px' }}
                            >
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
            })}
          </Table>
        </TableContainer>
      ))}
    </>
  );
}

export default LayoutFinanceTableByProject;
