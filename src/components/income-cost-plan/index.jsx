import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import data from '../../json/income-cost-general-plan.json';
import { TableContainer } from '@mui/material';

function IncomeCostPlan() {
  const preparedData = Object.entries(data).map(([costType, value]) => ({
    costType,
    value,
  }));

  console.log({ preparedData });

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.costType,
        id: 'costType',
        header: 'Название',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType1',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType2',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType3',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType4',
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData}
      renderDetailPanel={({ row }) => <TableContainer />}
    />
  );
}

export default IncomeCostPlan;
