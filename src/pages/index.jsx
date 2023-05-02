import React from 'react';
import LayoutIncomeCostByProject from '../layouts/layout-page';
import IncomeCostTotalsPlan from '../components/income-cost/income-cost-totals-plan';
import IncomeCostTotalsPlanSplit from '../components/income-cost/income-cost-totals-plan-split';
import { Box } from '@mui/material';

function IncomeCostByProjectPlanDraft() {
  return (
    <Box>
      <IncomeCostTotalsPlan />
      <IncomeCostTotalsPlanSplit />
    </Box>
  );
}

export default IncomeCostByProjectPlanDraft;
