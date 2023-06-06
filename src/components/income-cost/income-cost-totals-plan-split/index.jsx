import React, { useState, useEffect } from 'react';

import { getBudgetPlan } from '../../../utils/api-requests';
import LayoutFinanceTableDetailed from '../../layouts-table/layout-finance-table-detailed';
import IncomeCostTotalsPlan from '../income-cost-totals-plan';
import { categories } from '../../../utils/constants';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import { useAuth } from '../../../contexts/auth-provider';

function IncomeCostTotalsPlanSplit() {
  const [planSplitData, setPlanSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();

  useEffect(() => {
    getBudgetPlan(token)
      .then((data) => {
        setPlanSplitData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setPlanSplitData([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setPlanSplitData([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // if (planSplitData.length === 0) return;

  return (
    <>
      <IncomeCostTotalsPlan />
      {planSplitData && (
        <LayoutFinanceTableDetailed
          isLoading={isLoading}
          data={planSplitData}
          categories={categories}
          error={error}
          message={message}
        />
      )}
    </>
  );
}

export default IncomeCostTotalsPlanSplit;
