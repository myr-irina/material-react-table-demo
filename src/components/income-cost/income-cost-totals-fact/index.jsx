import React, { useState, useEffect } from 'react';

import data from '../../../json/income-cost-general-fact.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';

function IncomeCostTotalsFact() {
  return <LayoutFinanceTableTotal data={data} />;
}

export default IncomeCostTotalsFact;
