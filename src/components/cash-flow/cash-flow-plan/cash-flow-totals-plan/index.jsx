import React, { useState, useEffect } from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import data from '../../../../json/cash-flow-general-plan.json';

import { getCashFlowPlan } from '../../../../utils/api-requests';

function CashFlowTotalsPlan() {
  const [totalPalnData, setTotalPlanData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCashFlowPlan()
      .then((data) => {
        setTotalPlanData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  if (totalPalnData.length === 0) return;
  return <LayoutFinanceTableTotal isLoading={isLoading} data={totalPalnData} />;
}

export default CashFlowTotalsPlan;
