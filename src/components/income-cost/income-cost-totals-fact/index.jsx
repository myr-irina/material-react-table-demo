import React, { useState, useEffect } from 'react';

import data from '../../../json/income-cost-general-fact.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';

import { getBudgetFact } from '../../../utils/api-requests';

function IncomeCostTotalsFact() {
  const [budgetFact, setBudgetFact] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBudgetFact()
      .then((data) => {
        setBudgetFact(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (budgetFact.length === 0) return;

  return (
    budgetFact && (
      <LayoutFinanceTableTotal
        isLoading={isLoading}
        data={budgetFact}
        title='Таблица БДР (факт)'
      />
    )
  );
}

export default IncomeCostTotalsFact;
