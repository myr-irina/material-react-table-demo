import React, { useState, useEffect } from 'react';

import data from '../../../json/income-cost-general-plan.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';

import { getBudgetPlan } from '../../../utils/api-requests';

function IncomeCostTotalsPlan() {
  const [budgetPlan, setBudgetPlan] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    getBudgetPlan()
      .then((data) => {
        setIsLoading(true);
        if (isMounted) {
          setBudgetPlan(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
      .finally(() => setIsLoading(false));

    return () => {
      isMounted = false;
    };
  }, []);

  return <LayoutFinanceTableTotal isLoading={isLoading} data={data} />;
}

export default IncomeCostTotalsPlan;
