import React, { useState, useMemo, useEffect, useRef } from 'react';

import data from '../../../json/income-cost-general-fact.json';

import { getBudgetFact } from '../../../utils/api-requests';
import LayoutFinanceTableDetailed from '../../layouts-table/layout-finance-table-detailed';
import IncomeCostTotalsPlan from '../income-cost-totals-plan';
import { categories } from '../../../utils/constants';

function IncomeCostTotalsFactSplit2() {
  const [factSplitData, setFactSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBudgetFact()
      .then((data) => {
        setFactSplitData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (factSplitData.length === 0) return;

  return (
    <>
      <IncomeCostTotalsPlan />
      <LayoutFinanceTableDetailed
        isLoading={isLoading}
        data={factSplitData}
        categories={categories}
      />
    </>
  );
}

export default IncomeCostTotalsFactSplit2;
