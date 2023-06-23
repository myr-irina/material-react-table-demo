import React, { useState, useEffect } from 'react';

import LayoutFinanceTableTotal from '../../layouts-table/layout-finance-table-total';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import { getBudgetPlan } from '../../../utils/api-requests';
import { useAuth } from '../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function IncomeCostTotalsPlan() {
  const [budgetPlan, setBudgetPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getBudgetPlan(token)
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
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setBudgetPlan([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setBudgetPlan([]);
        }
      })
      .finally(setIsLoading(false));
  }, []);

  
  return (
    <LayoutFinanceTableTotal
      isLoading={isLoading}
      data={budgetPlan}
      error={error}
      message={message}
      title="Таблица БДР (план)"
      tableVariant="bdr"
    />
  );
}

export default IncomeCostTotalsPlan;
