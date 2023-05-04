import React from 'react';
import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr';
import data from '../../../json/income-cost-general-fact.json';

function IncomeCostTotalsFactSplit() {
  return <LayoutCollapsedTableBdr data={data} />;
}

export default IncomeCostTotalsFactSplit;
