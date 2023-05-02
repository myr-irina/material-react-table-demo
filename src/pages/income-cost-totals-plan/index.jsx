import React from 'react';
import IncomeCostTotalsPlan from '../../components/income-cost/income-cost-totals-plan';
import IncomeCostTotalsPlanSplit from '../../components/income-cost/income-cost-totals-plan-split';
import { Box } from '@mui/material';

function IncomeCostByProjectPlanPage() {
  return (
    <Box>
      <IncomeCostTotalsPlan />
      <IncomeCostTotalsPlanSplit />
    </Box>
  );
}

export default IncomeCostByProjectPlanPage;
