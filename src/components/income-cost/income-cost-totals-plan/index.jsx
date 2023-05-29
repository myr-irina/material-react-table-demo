import React, { useState, useEffect } from 'react';

import data from '../../../json/income-cost-general-plan.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';

import { getBudgetPlan } from '../../../utils/api-requests';

function IncomeCostTotalsPlan() {
  const [budgetPlan, setBudgetPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBudgetPlan()
      .then((data) => {
        setBudgetPlan(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  if (budgetPlan.length === 0) return;

  return (
    <LayoutFinanceTableTotal
      isLoading={isLoading}
      data={budgetPlan}
      title='Таблица БДР (план)'
      tableVariant='bdr'
    />
  );
}

export default IncomeCostTotalsPlan;
