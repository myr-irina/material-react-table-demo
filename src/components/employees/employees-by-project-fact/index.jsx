import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

import { employeesByProjectFactData } from '../../../json/employees-by-project-fact ';

function EmployeesByProjectFact() {
  const preparedData = [];

  for (let key in employeesByProjectFactData) {
    for (let key2 in employeesByProjectFactData[key]) {
      preparedData.push({ [key2]: employeesByProjectFactData[key][key2] });
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
          {console.log(Object.entries(row.original))}

          {/* <Typography>{Object.entries(row.original)[0][0]}</Typography> */}
          {/* <Typography>
            {Object.entries(row.original).map((item, i) =>
              item.map((item) => {
                return console.log(item);
              })
            )}
          </Typography> */}
        </Box>
      )}
      positionExpandColumn='last'
    />
  );
}

export default EmployeesByProjectFact;
