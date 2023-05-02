import React from 'react';

import CashFlowTotalsFact from '../../components/cash-flow/cash-flow-fact/cash-flow-totals-fact';
import CashFlowTotalsFactSplit from '../../components/cash-flow/cash-flow-fact/cash-flow-totals-fact-split';

import { Box } from '@mui/material';

function CashFlowByProjectFactPage() {
  return (
    <Box>
      <CashFlowTotalsFact />
      <CashFlowTotalsFactSplit />
    </Box>
  );
}

export default CashFlowByProjectFactPage;
