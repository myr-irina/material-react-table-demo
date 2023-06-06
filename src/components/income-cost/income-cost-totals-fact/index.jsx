import React, { useState, useEffect } from 'react';

import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import { getBudgetFact } from '../../../utils/api-requests';
import { useAuth } from '../../../contexts/auth-provider';

function IncomeCostTotalsFact() {
  const [budgetFact, setBudgetFact] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();

  useEffect(() => {
    getBudgetFact(token)
      .then((data) => {
        setBudgetFact(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setBudgetFact([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setBudgetFact([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (budgetFact.length === 0) return;

  return (
    budgetFact && (
      <LayoutFinanceTableTotal
        isLoading={isLoading}
        data={budgetFact}
        error={error}
        message={message}
        title='Таблица БДР (факт)'
      />
    )
  );
}

export default IncomeCostTotalsFact;
