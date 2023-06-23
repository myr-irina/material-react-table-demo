import React, { useState, useEffect } from 'react';

import LayoutFinanceTableDetailed from '../../../layouts-table/layout-finance-table-detailed';
import CashFlowTotalsFact from '../cash-flow-totals-fact';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { getCashFlowFact } from '../../../../utils/api-requests';
import { categoriesDDS } from '../../../../utils/constants';
import { useAuth } from '../../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function CashFlowTotalsFactSplit() {
  const [factSplitData, setFactSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getCashFlowFact(token)
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

  return (
    <>
      <CashFlowTotalsFact />
      <LayoutFinanceTableDetailed
        isLoading={isLoading}
        data={factSplitData}
        categories={categoriesDDS}
        error={error}
        message={message}
      />
    </>
  );
}

export default CashFlowTotalsFactSplit;
