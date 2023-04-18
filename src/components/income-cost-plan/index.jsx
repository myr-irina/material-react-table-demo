import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import data from '../../json/income-cost-general-plan.json';

function IncomeCostPlan() {
  const preparedData = Object.entries(data).map(([costType, value]) => ({
    costType,
    value,
  }));

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => console.log(row, 'row'), //accessorFn used to join multiple data into a single cell
        id: 'name', //id is still required when using accessorFn instead of accessorKey
        header: 'Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={preparedData} />;
}

export default IncomeCostPlan;
