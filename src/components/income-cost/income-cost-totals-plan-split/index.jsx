import React, { useState, useMemo, useEffect, useRef } from 'react';

import data from '../../../json/income-cost-general-plan.json';

import LayoutCollapsedTableBdr from '../../layouts-table/layout-collapsed-table-bdr';
import { getBudgetPlan } from '../../../utils/api-requests';

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

  return <LayoutCollapsedTableBdr isLoading={isLoading} data={planSplitData} />;
}

export default IncomeCostTotalsPlanSplit;
