import React from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import data from '../../../../json/cash-flow-general-fact copy.json';
import data2 from '../../../../json/cash-flow-general-fact.json';

function CashFlowTotalsFact() {
  return <LayoutFinanceTableTotal data={data} />;
}

export default CashFlowTotalsFact;
