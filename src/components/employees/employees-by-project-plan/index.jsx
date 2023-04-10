import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

import { employeesByProjectPlanData } from '../../../json/employees-by-project-plan';

function EmployeesByProjectPlan() {
  // console.log(data.january['Alexander Shimchuk']['AUK INT'].hours);
  // const preparedData = Object.entries(data);
  // console.log({ preparedData });

  // const array = [];
  // for (let i = 0; i < data.length; i++) array.push(Object.values(data[i]));
  // console.log({ array });

  const headers = employeesByProjectPlanData.map((item) => {
    // return item.january.common_amounts;
    return Object.keys(item.january.common_amounts);
  });

  const headers2 = [...new Set(headers)];
  // const headers = Object.keys(
  //   employeesByProjectPlanData.january['Alexander Shimchuk']['common_amounts']
  // );

  console.log({ headers2 });

  const columns = [
    {
      accessorFn: ({ january }) =>
        `${january['Alexander Shimchuk']['AUK INT'].hours}ч. (${january['Alexander Shimchuk']['AUK INT'].percent}%)`,
      header: 'Январь',
    },
  ];

  return (
    <MaterialReactTable columns={columns} data={employeesByProjectPlanData} />
  );
}

export default EmployeesByProjectPlan;
