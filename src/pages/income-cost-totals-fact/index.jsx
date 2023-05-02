import React from 'react';
import IncomeCostTotalsFact from '../../components/income-cost/income-cost-totals-fact';
import IncomeCostTotalsFactSplit from '../../components/income-cost/income-cost-totals-fact-split';

import { Box } from '@mui/material';

function IncomeCostByProjectFactPage() {
  return (
    <Box>
      <IncomeCostTotalsFact />
      <IncomeCostTotalsFactSplit />
    </Box>
  );
}

export default IncomeCostByProjectFactPage;
