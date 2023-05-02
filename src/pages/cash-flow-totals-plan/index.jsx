import React from 'react';

import CashFlowTotalsPlan from '../../components/cash-flow/cash-flow-plan/cash-flow-totals-plan';
import CashFlowTotalsPlanSplit from '../../components/cash-flow/cash-flow-plan/cash-flow-totals-plan-split';

import { Box } from '@mui/material';

function CashFlowByProjectPlanPage() {
  return (
    <Box>
      <CashFlowTotalsPlan />
      <CashFlowTotalsPlanSplit />
    </Box>
  );
}

export default CashFlowByProjectPlanPage;
