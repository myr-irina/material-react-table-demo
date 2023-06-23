import React, { useState, useEffect } from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import { getCashFlowPlan } from '../../../../utils/api-requests';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { useAuth } from '../../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function CashFlowTotalsPlan() {
  const [totalPalnData, setTotalPlanData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getCashFlowPlan(token)
      .then((data) => {
        setTotalPlanData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setTotalPlanData([]);
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setTotalPlanData([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setTotalPlanData([]);
        }
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <LayoutFinanceTableTotal
      isLoading={isLoading}
      data={totalPalnData}
      error={error}
      message={message}
      title="Таблица ДДС (план)"
      tableVariant="dds"
    />
  );
}

export default CashFlowTotalsPlan;
