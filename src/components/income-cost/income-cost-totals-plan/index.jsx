import React, { useState, useEffect } from 'react';

import data from '../../../json/income-cost-general-plan.json';
import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import { getBudgetPlan } from '../../../utils/api-requests';

function IncomeCostTotalsPlan() {
  const [budgetPlan, setBudgetPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getBudgetPlan()
      .then((data) => {
        setBudgetPlan(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setBudgetPlan([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setBudgetPlan([]);
      })
      .finally(setIsLoading(false));
  }, []);

  if (budgetPlan.length === 0) return;

  return (
    <LayoutFinanceTableTotal
      isLoading={isLoading}
      data={budgetPlan}
      error={error}
      message={message}
      title='Таблица БДР (план)'
      tableVariant='bdr'
    />
  );
}

export default IncomeCostTotalsPlan;
