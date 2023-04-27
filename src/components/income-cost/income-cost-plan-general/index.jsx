import React, { useMemo } from 'react';

import data from '../../../json/income-cost-general-plan.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';

function IncomeCostPlanGeneral() {
  return <LayoutFinanceTableTotal data={data} />;
}

export default IncomeCostPlanGeneral;
