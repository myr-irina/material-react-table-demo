import React, { useState, useEffect } from 'react';
import LayoutFinanceTableTotal from '../../../layouts-table/layout-finance-table-total';
import { SERVER_ERROR_MESSAGE } from '../../../../utils/responseMessages';
import { getCashFlowFact } from '../../../../utils/api-requests';
import { useAuth } from '../../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function CashFlowTotalsFact() {
  const [totalData, setTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const { token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    getCashFlowFact(token)
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
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setTotalData([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setTotalData([]);
        }
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
        title="Таблица ДДС (факт)"
        tableVariant="dds"
      />
    )
  );
}

export default CashFlowTotalsFact;
