import React, { useState, useMemo, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { employeesByProjectPlanData } from '../../../json/employees-by-project-plan';

import data from './../../../json/employees-by-project-plan.json';
import { getProjectPlanHours } from '../../../utils/api-requests';

import { parseTableData } from '../../../utils/json-parser';

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

function EmployeesByProjectPlan() {
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

  for (let key in employeesByProjectPlanData) {
    for (let key2 in employeesByProjectPlanData[key]) {
      preparedData.push({ [key2]: employeesByProjectPlanData[key][key2] });
    }
  }

  console.log(parseTableData(preparedData));

  // const preparedData2 = [];
  // for (let key in projectPlanHours) {
  //   preparedData2.push({ [key]: projectPlanHours[key] });
  // }

  // console.log({ preparedData2 });

  const columns = [
    {
      header: 'Month',
      accessorFn: (row) => Object.keys(row),
    },
    {
      header: 'AUK INT',
    },
    {
      header: 'LIA',
    },
    {
      header: '33D',
    },
    {
      header: 'INT',
    },
    {
      header: 'PSB-17',
    },
    {
      header: 'TEH',
    },
    {
      header: 'SRP',
    },
    {
      header: 'GOR',
    },
    {
      header: 'Domex 3D',
    },
    {
      header: 'OSL',
    },
    {
      header: 'BRK',
    },
    {
      header: 'HYD2.1',
    },
    {
      header: 'Отпуск',
    },
    {
      header: 'REN-3',
    },
    {
      header: 'REN-2',
    },
    {
      header: 'PSB-6 Фасады ЦОД',
    },
    {
      header: 'VOL',
    },
    {
      header: 'NEG',
    },
    {
      header: 'TNK',
    },
    {
      header: 'PSB-16',
    },
    {
      header: 'Сумма',
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
      muiTablePaperProps={{
        sx: {
          // maxWidth: '800px',
          m: 'auto',
        },
      }}
      muiTableHeadRowProps={{
        sx: {
          // maxWidth: '800px',
        },
      }}
      muiTableHeadCellProps={{
        sx: (theme) => ({
          // background: 'rgba(52, 210, 235, 0.1)',
          // borderRight: '1px solid rgba(224,224,224,1)',
          // color: theme.palette.text.primary,

          whiteSpace: 'nowrap',
          overflow: 'hidden',
          width: '50px',
        }),
      }}
      muiTableBodyRowProps={{
        sx: {
          width: '50px',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          width: '50px',
        },
      }}
      // layoutMode='grid'
      displayColumnDefOptions={{
        'mrt-row-expand': {
          // muiTableHeadCellProps: {
          //   align: 'right',
          // },
          // muiTableBodyCellProps: {
          //   align: 'right',
          // },
        },
      }}
      renderTopToolbarCustomActions={() => {
        return (
          <Typography variant='h5' mb='15px'>
            Таблица рабочего времени (план по проектам)
          </Typography>
        );
      }}
      renderDetailPanel={({ row }) => (
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                {TABLE_HEAD.map((cell, ind) => (
                  <TableCell key={ind}>
                    <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>
                      {cell}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(row.original).map((data) => {
                if (data === null) return;

                const COMMON_AMOUNTS = 'common_amounts';

                const keys = Object.keys(data);
                const values = Object.values(data);
                let dataResult = [
                  ...Array(values.length).fill([
                    ...Array(TABLE_HEAD.length - 2).fill(''),
                  ]),
                ];

                console.log(keys);
                dataResult = dataResult.map((row, i) => [
                  ...[keys[i] !== COMMON_AMOUNTS ? keys[i] : []],
                  ...row,
                ]);

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
                      result = `${obj['hours']}ч. (${obj['percent']}%)`;
                    }
                  }
                  return result;
                }

                return dataResult.map((row, ind) => (
                  <StyledTableRow key={ind}>
                    {/* {console.log({ row })} */}
                    <TableCell>{row[0]}</TableCell>
                    {row
                      .splice(1)
                      .map(
                        (cell, ind) =>
                          cell && (
                            <TableCell key={ind}>{showProps(cell)}</TableCell>
                          )
                      )}
                    <TableCell>{row[row.length - 1].hours}</TableCell>
                  </StyledTableRow>
                ));
              })}
              <StyledTableRow>
                <TableCell>Common Amounts</TableCell>
                {TABLE_HEAD.map((columnName) => {
                  const commonAmountsValues = Object.values(
                    Object.values(row.original)[0].common_amounts
                  );
                  const commonAmountsKeys = Object.keys(
                    Object.values(row.original)[0].common_amounts
                  );

                  const index = commonAmountsKeys.indexOf(columnName);
                  if (index !== -1) {
                    return <TableCell>{commonAmountsValues[index]}</TableCell>;
                  }
                })}
              </StyledTableRow>
            </TableBody>
          </Table>
        </Box>
      )}
      // positionExpandColumn='last'
    />
  );
}

export default EmployeesByProjectPlan;
