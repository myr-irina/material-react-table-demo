import React, { useState, useEffect } from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import data from '../../../../json/cash-flow-general-plan.json';
import { getCashFlowPlan } from '../../../../utils/api-requests';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { useAuth } from '../../../../contexts/auth-provider';

function CashFlowTotalsPlan() {
  const [totalPalnData, setTotalPlanData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    getCashFlowPlan(token)
      .then((data) => {
        setTotalPlanData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setTotalPlanData([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setTotalPlanData([]);
      })
      .finally(setIsLoading(false));
  }, []);

  if (totalPalnData.length === 0) return;
  return (
    <LayoutFinanceTableTotal
      isLoading={isLoading}
      data={totalPalnData}
      error={error}
      message={message}
      title='Таблица ДДС (план)'
      tableVariant='dds'
    />
  );
}

export default CashFlowTotalsPlan;
