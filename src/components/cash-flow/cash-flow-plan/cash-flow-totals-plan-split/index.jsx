import React, { useState, useEffect } from 'react';

import data from '../../../../json/cash-flow-general-plan.json';
import LayoutFinanceTableDetailed from '../../../layouts-table/layout-finance-table-detailed';

import { getCashFlowPlan } from '../../../../utils/api-requests';
import CashFlowTotalsPlan from '../cash-flow-totals-plan';

import { categoriesDDS } from '../../../../utils/constants';

function CashFlowTotalsPlanSplit() {
  const [planSplitData, setPlanSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCashFlowPlan()
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
      <CashFlowTotalsPlan />
      <LayoutFinanceTableDetailed
        isLoading={isLoading}
        data={planSplitData}
        categories={categoriesDDS}
      />
    </>
  );
}

export default CashFlowTotalsPlanSplit;
