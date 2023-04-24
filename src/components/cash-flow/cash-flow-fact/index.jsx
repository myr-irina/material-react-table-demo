import React from 'react';
import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr';
import data from '../../../json/cash-flow-general-fact copy.json';

function CashFlowFact() {
  return <LayoutCollapsedTableBdr data={data} />;
}

export default CashFlowFact;
