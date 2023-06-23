import React, { useState, useEffect } from 'react';

import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project';
import { getBudgetByProjectPlan } from '../../../utils/api-requests';
import { useAuth } from '../../../contexts/auth-provider';
import { useNavigate } from 'react-router-dom';

function IncomeCostPlanByProject() {
  const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getBudgetByProjectPlan(token)
      .then((data) => {
        setBudgetPlanByProject(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === '500') {
          console.log('Внутренняя ошибка сервера');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setBudgetPlanByProject([]);
        } else if (error === '401') {
          localStorage.clear();
          navigate('/signin');
          setError(true);
          setMessage(SERVER_ERROR_MESSAGE);
          setIsLoading(false);
          setBudgetPlanByProject([]);
        } else {
          console.log(error);
          setError(true);
          setIsLoading(false);
          setBudgetPlanByProject([]);
        }
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <LayoutFinanceTableByProject
      isLoading={isLoading}
      data={budgetPlanByProject}
      error={error}
      message={message}
      title="Таблица БДР (план по проектам)"
    />
  );
}

export default IncomeCostPlanByProject;
