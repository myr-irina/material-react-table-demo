import React, { useState, useMemo, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { employeesByProjectPlanData } from '../../../json/employees-by-project-plan';

import data from './../../../json/employees-by-project-plan.json';
import { getProjectPlanHours } from '../../../utils/api-requests';

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
function EmployeesByProjectPlan() {
  const [projectPlanHours, setProjectPlanHours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProjectPlanHours()
      .then((data) => {
        setProjectPlanHours(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const preparedData = [];

  // for (let key in employeesByProjectPlanData) {
  //   for (let key2 in employeesByProjectPlanData[key]) {
  //     preparedData.push({ [key2]: employeesByProjectPlanData[key][key2] });
  //   }
  // }

  // console.log({ preparedData });

  const preparedData2 = [];
  for (let key in projectPlanHours) {
    preparedData2.push({ [key]: projectPlanHours[key] });
  }

  console.log({ preparedData2 });

  const columns = [
    {
      header: 'Month',
      accessorFn: (row) => Object.keys(row),
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData2}
      enableStickyHeader
      enableColumnFilters={false}
      enableHiding={false}
      enableDensityToggle={false}
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
                const keys = Object.keys(data);
                const values = Object.values(data);
                let dataResult = [
                  ...Array(values.length).fill([
                    ...Array(TABLE_HEAD.length - 2).fill(''),
                  ]),
                ];

                dataResult = dataResult.map((row, i) => [keys[i], ...row]);

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
                  <TableRow key={ind}>
                    <TableCell>{row[0]}</TableCell>
                    {row
                      .splice(1)
                      .map(
                        (cell, ind) =>
                          cell !== null && (
                            <TableCell key={ind}>{showProps(cell)}</TableCell>
                          )
                      )}
                    <TableCell>{row[row.length - 1].hours}</TableCell>
                  </TableRow>
                ));
              })}
            </TableBody>
          </Table>
        </Box>
      )}
      // positionExpandColumn='last'
    />
  );
}

export default EmployeesByProjectPlan;
