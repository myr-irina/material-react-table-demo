import React from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import data from '../../../../json/cash-flow-general-plan.json';

function CashFlowTotalsPlan() {
  return <LayoutFinanceTableTotal data={data} />;
}

export default CashFlowTotalsPlan;
