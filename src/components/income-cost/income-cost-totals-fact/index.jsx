import React, { useState, useEffect } from 'react';

import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import { getBudgetFact } from '../../../utils/api-requests';
import { useAuth } from '../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function IncomeCostTotalsFact() {
  const [budgetFact, setBudgetFact] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();
  const navigate = useNavigate();

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
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setBudgetFact([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setBudgetFact([]);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    budgetFact && (
      <LayoutFinanceTableTotal
        isLoading={isLoading}
        data={budgetFact}
        error={error}
        message={message}
        title="Таблица БДР (факт)"
      />
    )
  );
}

export default IncomeCostTotalsFact;
