import React, { useState, useEffect } from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';

import data from '../../../../json/cash-flow-general-fact.json';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { getCashFlowFact } from '../../../../utils/api-requests';

function CashFlowTotalsFact() {
  const [totalData, setTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getCashFlowFact()
      .then((data) => {
        setTotalData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setTotalData([]);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setTotalData([]);
      })
      .finally(setIsLoading(false));
  }, []);

  if (totalData.length === 0) return;

  return (
    totalData && (
      <LayoutFinanceTableTotal
        isLoading={isLoading}
        data={totalData}
        error={error}
        message={message}
        title='Таблица ДДС (факт)'
        tableVariant='dds'
      />
    )
  );
}

export default CashFlowTotalsFact;
