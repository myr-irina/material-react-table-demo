import React, { useState, useMemo, useEffect, useRef } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';

import { getProjectPlanHours } from './../../../../utils/api-requests';

import LayoutCollapsedTableEmployees from '../../../layouts-table/layout-collapsed-table-employees';
import employeesByProjectPlanData from '../../../../json/employees-by-project-plan.json';

function EmployeesByProjectPlan() {
  // const [projectPlanHours, setProjectPlanHours] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   getProjectPlanHours()
  //     .then((data) => {
  //       setProjectPlanHours(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <LayoutCollapsedTableEmployees
      header='Сотрудники'
      data={employeesByProjectPlanData}
    />
  );
}

export default EmployeesByProjectPlan;
