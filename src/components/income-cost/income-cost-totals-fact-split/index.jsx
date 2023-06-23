import React, { useState, useMemo, useEffect, useRef } from 'react';

import { getBudgetFact } from '../../../utils/api-requests';
import LayoutFinanceTableDetailed from '../../layouts-table/layout-finance-table-detailed';
import IncomeCostTotalsFact from '../income-cost-totals-fact';
import { categories } from '../../../utils/constants';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import { useAuth } from '../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function IncomeCostTotalsFactSplit() {
  const [factSplitData, setFactSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getBudgetFact(token)
      .then((data) => {
        setFactSplitData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setFactSplitData([]);
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setFactSplitData([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setFactSplitData([]);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!factSplitData.length) return;

  return (
    <>
      <IncomeCostTotalsFact />
      <LayoutFinanceTableDetailed
        isLoading={isLoading}
        data={factSplitData}
        categories={categories}
        error={error}
        message={message}
      />
    </>
  );
}

export default IncomeCostTotalsFactSplit;
