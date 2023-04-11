import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { employeesByProjectFactData } from './../../../json/employees-by-project-fact';

const TABLE_HEAD = [
  'Сотрудник',
  'GOR',
  'PSB-17',
  'AUK INT',
  '33D',
  'INT',
  'LIA',
  'TEH',
  'SRP',
  'Domex 3D',
  'Сумма',
];
function EmployeesByProjectFact() {
  const preparedData = [];

  for (let key in employeesByProjectFactData) {
    for (let key2 in employeesByProjectFactData[key]) {
      preparedData.push({ [key2]: employeesByProjectFactData[key][key2] });
    }
  }
  console.log(Object.values(preparedData).map((item) => Object.values(item)));

  const columns = [
    {
      header: 'Month',
      accessorFn: (row) => Object.keys(row),
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData}
      enableStickyHeader
      renderDetailPanel={({ row }) => (
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                {TABLE_HEAD.map((cell, ind) => (
                  <TableCell key={ind}>{cell}</TableCell>
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
                // console.log(dataResult);
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

                // console.log({ dataResult });

                return dataResult.map((row, ind) => (
                  <TableRow key={ind}>
                    {/* {console.log({ row })} */}
                    <TableCell>{row[0]}</TableCell>
                    {row.map((cell, ind) => (
                      <TableCell key={ind}>{cell.hours}</TableCell>
                    ))}
                    <TableCell>{row[row.length - 2].hours}</TableCell>
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

export default EmployeesByProjectFact;
