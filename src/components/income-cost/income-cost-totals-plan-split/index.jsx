import React, { useState, useMemo, useEffect, useRef } from 'react';

import data from '../../../json/income-cost-general-plan.json';
import { getBudgetPlan } from '../../../utils/api-requests';
import LayoutFinanceTableDetailed from '../../layouts-table/layout-finance-table-detailed';
import IncomeCostTotalsPlan from '../income-cost-totals-plan';
import { categories } from '../../../utils/constants';

function IncomeCostTotalsPlanSplit() {
  const [planSplitData, setPlanSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBudgetPlan()
      .then((data) => {
        setPlanSplitData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (planSplitData.length === 0) return;

  return (
    <>
      <IncomeCostTotalsPlan />
      {planSplitData && (
        <LayoutFinanceTableDetailed
          isLoading={isLoading}
          data={planSplitData}
          categories={categories}
        />
      )}
    </>
  );
}

export default IncomeCostTotalsPlanSplit;
