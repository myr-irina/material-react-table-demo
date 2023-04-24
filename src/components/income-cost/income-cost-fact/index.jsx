import React from 'react';
import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr';
import data from '../../../json/income-cost-general-fact copy.json';

function IncomeCostFact() {
  return <LayoutCollapsedTableBdr data={data} />;
}

export default IncomeCostFact;
