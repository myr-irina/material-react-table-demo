import React, { useState, useMemo, useEffect, useRef } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';
import { parseTableData } from '../../../../utils/json-parser';
import { getCellColor } from '../../../../utils/getCellColor';

const TABLE_HEAD = [
  'Сотрудник',
  'AUK INT',
  'LIA',
  '33D',
  'INT',
  'PSB-17',
  'TEH',
  'SRP',
  'GOR',
  'Domex 3D',
  'OSL',
  'BRK',
  'HYD2.1',
  'Отпуск',
  'REN-3',
  'REN-2',
  'PSB-6 Фасады ЦОД',
  'VOL',
  'NEG',
  'TNK',
  'PSB-16',
  'Сумма',
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function LayoutEmployeesByProject(data) {
  // const [projectPlanHours, setProjectPlanHours] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   getProjectPlanHours()
  //     .then((data) => {
  //       setProjectPlanHours(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const preparedData = [];

  for (let key in data) {
    for (let key2 in data[key]) {
      preparedData.push({ [key2]: data[key][key2] });
    }
  }

  // console.log(parseTableData(preparedData), 'parsed');

  const columns = [
    {
      header: 'Month',
      accessorFn: (row) => Object.keys(row),
      size: 100,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 30,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData}
      enableStickyHeader
      enableColumnFilters={false}
      enableHiding={false}
      enableDensityToggle={false}
      enableColumnActions={false}
      muiTableProps={{
        sx: {
          tableLayout: 'fixed',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          width: '50px',
        },
      }}
      initialState={{
        density: 'compact',
        sorting: [{ id: 'name', desc: false }],
        pagination: { pageSize: 25, pageIndex: 0 },
      }}
      muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10, 20, 25],
        labelRowsPerPage: 'Количество видимых строк',
      }}
      renderTopToolbarCustomActions={() => {
        return (
          <Typography variant='h5' mb='15px'>
            Таблица рабочего времени (план по проектам)
          </Typography>
        );
      }}
      renderDetailPanel={({ row }) => (
        <TableContainer
          sx={{
            width: '100%',
            margin: '0 auto',
            overflowX: 'initial',
            // maxHeight: '900px',
          }}
        >
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
            size='small'
          >
            <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <TableRow>
                {/* {console.log(
                  Object.values(row.original).map((item) =>
                    Object.values(item).map((item) => Object.keys(item))
                  )
                )} */}
                {TABLE_HEAD.map((cell, ind) => (
                  <TableCell
                    sx={{
                      minWidth: '55px',
                    }}
                    component='th'
                    key={ind}
                  >
                    <Typography
                      sx={{
                        fontWeight: '700',
                        fontSize: '14px',
                        overflowX: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {cell}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(row.original).map((data) => {
                if (data === null) return;

                // const COMMON_AMOUNTS = 'common_amounts';

                const keys = Object.keys(data);
                const values = Object.values(data);
                let dataResult = [
                  ...Array(values.length).fill([
                    ...Array(TABLE_HEAD.length - 2).fill(''),
                  ]),
                ];
                dataResult = dataResult.map((row, i) => [keys[i], ...row]);
                console.log({ dataResult });

                values.forEach((projects, ind) => {
                  Object.entries(projects).forEach(([name, val]) => {
                    const index = TABLE_HEAD.indexOf(name);
                    if (index !== -1) {
                      dataResult[ind].splice(index, 1, val);
                    }

                    if (name === 'amount_values') {
                      dataResult[ind].push(val);
                    }
                  });
                });

                function showProps(obj) {
                  let result = '';
                  for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                      result = `${obj['hours']}ч.
                       (${obj['percent']}%)`;
                    }
                  }
                  return result;
                }

                return dataResult.map((row, ind) => (
                  <StyledTableRow key={ind}>
                    <TableCell
                      sx={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        minWidth: '55px',
                      }}
                    >
                      {row[0]}
                    </TableCell>
                    {row.splice(1).map(
                      (cell, ind) =>
                        cell !== null && (
                          <TableCell
                            sx={{
                              overflow: 'hidden',
                              minWidth: '55px',
                              // backgroundColor: `${getCellColor(cell.percent)}`,
                            }}
                            key={ind}
                          >
                            {showProps(cell)}
                          </TableCell>
                        )
                    )}
                    <TableCell>{row[row.length - 1].hours}</TableCell>
                  </StyledTableRow>
                ));
              })}
              {/* <StyledTableRow>
                <TableCell
                  sx={{
                    minWidth: '55px',
                    fontWeight: 600,
                  }}
                >
                  Common Amounts
                </TableCell>
                {TABLE_HEAD.map((columnName) => {
                  const commonAmountsValues = Object.values(
                    Object?.values(row.original)[0]?.common_amounts
                  );
                  const commonAmountsKeys = Object.keys(
                    Object?.values(row.original)[0]?.common_amounts
                  );

                  const index = commonAmountsKeys.indexOf(columnName);
                  if (index !== -1) {
                    return (
                      <TableCell sx={{ fontWeight: 600 }}>
                        {commonAmountsValues[index]}
                      </TableCell>
                    );
                  }
                })}
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      // positionExpandColumn='last'
    />
  );
}
