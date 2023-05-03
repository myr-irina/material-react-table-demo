import React, { useState, useMemo, useEffect, useRef } from 'react';
import MaterialReactTable from 'material-react-table';

import { TableContainer } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';

import data from '../../../json/income-cost-general-plan.json';

import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr';
import { getBudgetByProjectPlan } from '../../../utils/api-requests';

function IncomeCostTotalsPlanSplit() {
  const [planSplitData, setPlanSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBudgetByProjectPlan()
      .then((data) => {
        console.log({ data });
        setPlanSplitData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log({ planSplitData });

  return <LayoutCollapsedTableBdr isLoading={isLoading} data={data} />;
}

export default IncomeCostTotalsPlanSplit;
