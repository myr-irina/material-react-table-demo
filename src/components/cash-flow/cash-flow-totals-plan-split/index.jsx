import React from 'react';
import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr/index';
import data from '../../../json/cash-flow-general-plan.json';

function CashFlowTotalsPlanSplit() {
  return <LayoutCollapsedTableBdr data={data} />;
}

export default CashFlowTotalsPlanSplit;
