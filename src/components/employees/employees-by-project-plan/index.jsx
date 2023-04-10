import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

import { employeesByProjectPlanData } from '../../../json/employees-by-project-plan';

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
      header: 'Сотрудники',
      // accessorFn: (row) => row.january,
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData}
      enableStickyHeader
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: 'repeat(10, 1fr)',
            width: '100%',
          }}
        >
          {Object.keys(row.original).map((key) => {
            return <Typography>{`${key}`}</Typography>;
          })}

          {/* {console.log(
            Object.keys(row.original).map((key) => {
              return console.log(Object.keys(row.original[key]));
            })
          )} */}

          {Object.keys(row.original).map((key) => {
            return (
              <Typography>{`${Object.keys(row.original[key])}`}</Typography>
            );
          })}
        </Box>
      )}
      positionExpandColumn='last'
    />
  );
}

export default EmployeesByProjectPlan;
