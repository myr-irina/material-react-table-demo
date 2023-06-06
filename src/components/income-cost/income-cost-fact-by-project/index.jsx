import React, { useState, useEffect, useMemo } from 'react';

import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project';
import { getBudgetByProjectFact } from '../../../utils/api-requests';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';

import { useAuth } from '../../../contexts/auth-provider';

function IncomeCostFactByProject() {
  const [budgetFactByProject, setBudgetFactByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = React.useState(null);

  const { token } = useAuth();

  useEffect(() => {
    getBudgetByProjectFact(token)
      .then((data) => {
        setBudgetFactByProject(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');

          setError(true);
          setIsLoading(false);
          setBudgetFactByProject([]);
          setMessage(SERVER_ERROR_MESSAGE);
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setBudgetFactByProject([]);
      })
      .finally(setIsLoading(false));
  }, []);

  if (budgetFactByProject.length === 0) return;

  return (
    budgetFactByProject && (
      <LayoutFinanceTableByProject
        isLoading={isLoading}
        data={budgetFactByProject}
        error={error}
        message={message}
        title='Таблица БДР (факт по проектам)'
      />
    )
  );
}

export default IncomeCostFactByProject;
