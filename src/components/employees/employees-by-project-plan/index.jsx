import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

import data from './../../../json/employees-by-project-plan.json';

function EmployeesByProjectPlan() {
  console.log({ data });
  const columns = useMemo(
    () => [
      {
        header: 'Сотрудники',
        accessorFn: (row) =>
          row.january !== null
            ? `${row?.january?.hours}ч. (${row?.january?.percent}%)`
            : '',
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        >
          <Typography>Address: {row.original.address}</Typography>
          <Typography>City: {row.original.city}</Typography>
          <Typography>State: {row.original.state}</Typography>
          <Typography>Country: {row.original.country}</Typography>
        </Box>
      )}
    />
  );
}

export default EmployeesByProjectPlan;
