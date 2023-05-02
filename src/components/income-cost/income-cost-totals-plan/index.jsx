import React, { useState, useEffect } from 'react';

import data from '../../../json/income-cost-general-plan.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';

import { getBudgetPlan } from '../../../utils/api-requests';

function IncomeCostTotalsPlan() {
  const [budgetPlan, setBudgetPlan] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    getBudgetPlan()
      .then((data) => {
        console.log({ data });
        // setBudgetPlan(data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // if (!budgetPlan) return;

  // console.log({ budgetPlan });

  return <LayoutFinanceTableTotal data={data} />;
}

export default IncomeCostTotalsPlan;
