import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Typography } from '@mui/material';
import data from './../../json/employees-general-plan.json';

export default function Table() {
  const columns = useMemo(
    () => [
      {
        header: 'Staff',
        accessorKey: 'staff',
      },
      {
        header: 'January',
        accessorFn: (row) =>
          row.january !== null
            ? `${row?.january?.hours} \n ${row?.january?.percent}%`
            : '',
      },
      {
        header: 'February',
        accessorFn: (row) =>
          row.february !== null
            ? `${row?.february?.hours} \n ${row?.february?.percent}%`
            : '',
      },
      {
        header: 'March',
        accessorFn: (row) =>
          row.march !== null
            ? `${row?.march?.hours} \n ${row?.march?.percent}%`
            : '',
      },
      {
        header: 'April',
        accessorFn: (row) =>
          row.april !== null
            ? `${row?.april?.hours} \n ${row?.april?.percent}%`
            : '',
      },
      {
        header: 'May',
        accessorFn: (row) =>
          row.may !== null ? `${row?.may?.hours} \n ${row?.may?.percent}%` : '',
      },
      {
        header: 'June',
        accessorFn: (row) =>
          row.june !== null
            ? (row) => `${row?.june?.hours} \n ${row?.june?.percent}%`
            : '',
      },

      {
        header: 'August',
        accessorFn: (row) =>
          row.august !== null
            ? `${row?.august?.hours} \n ${row?.august?.percent}%`
            : '',
      },
      {
        header: 'September',
        accessorFn: (row) =>
          row.september !== null
            ? `${row?.september?.hours} \n ${row?.september?.percent}%`
            : '',
      },
      {
        header: 'October',
        accessorFn: (row) =>
          row.october !== null
            ? `${row?.october?.hours} \n ${row?.october?.percent}%`
            : '',
      },
      {
        header: 'November',
        accessorFn: (row) =>
          row.november !== null
            ? `${row?.november?.hours} \n ${row?.november?.percent}%`
            : '',
      },
      {
        header: 'December',
        accessorFn: (row) =>
          row.december !== null
            ? `${row?.december?.hours} \n ${row?.december?.percent}%`
            : '',
      },
    ],
    []
  );

  return (
    <>
      <Typography variant='h4' gutterBottom sx={{ mt: '20px' }}>
        Сотрудники_общий_план
      </Typography>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        enableGlobalFilter={false}
        enableFilters={false}
        enablePagination={false}
        enableFullScreenToggle={false}
        enableDensityToggle={false}
      />
    </>
  );
}
