import React, { useState, useMemo, useEffect, useRef } from 'react';

import data from '../../../json/income-cost-general-fact.json';

import { getBudgetFact } from '../../../utils/api-requests';
import LayoutFinanceTableDetailed from '../../layouts-table/layout-finance-table-detailed';
import IncomeCostTotalsFact from '../income-cost-totals-fact';
import { categories } from '../../../utils/constants';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';

function IncomeCostTotalsFactSplit() {
  const [factSplitData, setFactSplitData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getBudgetFact()
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
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setFactSplitData([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (factSplitData.length === 0) return;

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
