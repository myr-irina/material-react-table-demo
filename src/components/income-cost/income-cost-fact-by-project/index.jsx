import React, { useState, useEffect } from 'react';

import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project';
import { getBudgetByProjectFact } from '../../../utils/api-requests';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import { useAuth } from '../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function IncomeCostFactByProject() {
  const [budgetFactByProject, setBudgetFactByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = React.useState(null);
  const navigate = useNavigate();

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
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setBudgetFactByProject([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setBudgetFactByProject([]);
        }
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
        title="Таблица БДР (факт по проектам)"
      />
    )
  );
}

export default IncomeCostFactByProject;
