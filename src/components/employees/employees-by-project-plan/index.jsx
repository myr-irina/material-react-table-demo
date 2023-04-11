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

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData}
      enableStickyHeader
      renderDetailPanel={({ row }) => (
        <Box>
          {/* {console.log(
            Object.values(row.original).map((item) =>
              Object.values(item).reduce((acc, curr) =>
                Object.keys(curr).map((item) => acc.push(item))
              )
            ),
            []
          )} */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Сотрудники</TableCell>
                <TableCell>Сотрудники</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {Object.values(row.original).map((item) =>
                  Object.keys(item).map((item, index) => (
                    <TableCell key={index}>{item}</TableCell>
                  ))
                )}

                {Object.values(row?.original).map((item) =>
                  Object.values(item)?.map((item) =>
                    Object.values(item)?.map((item, index) => {
                      return item !== null || item !== undefined ? (
                        <TableCell key={index}>
                          {`${Object?.values(item)[0]} ч. ${
                            Object?.values(item)[1]
                          } %`}
                        </TableCell>
                      ) : null;
                    })
                  )
                )}
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
