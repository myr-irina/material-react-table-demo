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

import { employeesByProjectPlanData } from '../../../json/employees-by-project-plan';

import data from './../../../json/employees-by-project-plan.json';

function EmployeesByProjectPlan() {
  const preparedData = [];

  for (let key in employeesByProjectPlanData) {
    for (let key2 in employeesByProjectPlanData[key]) {
      preparedData.push({ [key2]: employeesByProjectPlanData[key][key2] });
    }
  }

  console.log({ preparedData });

  const columns = [
    {
      header: 'Month',
      accessorFn: (row) => Object.keys(row),
    },
  ];

  function flatten(obj) {
    const result = {};
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'object') {
        const nested = flatten(obj[key]);
        for (const nestedKey of Object.keys(nested)) {
          result[`${key}.${nestedKey}`] = nested[nestedKey];
        }
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData}
      enableStickyHeader
      renderDetailPanel={({ row }) => (
        <Box>
          {/* {console.log(Object.values(row.original))} */}
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow></TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {Object.values(row.original).map((row, index) => {
                  return Object.keys(row).map((item, index) => {
                    return <TableCell key={index}>{item}</TableCell>;
                  });
                })}
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
      positionExpandColumn='last'
    />
  );
}

export default EmployeesByProjectPlan;
