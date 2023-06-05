import React, { useState, useEffect, useMemo } from 'react';

import data from '../../../json/bdr-by-project-plan.json';
import { SERVER_ERROR_MESSAGE } from '../../../utils/responseMessages';
import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project';
import { getBudgetByProjectPlan } from '../../../utils/api-requests';
import { useAuth } from '../../../services';

function IncomeCostPlanByProject() {
  const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const { token } = useAuth();

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
        }
        console.log(error);
        setError(true);
        setIsLoading(false);
        setBudgetPlanByProject([]);
      })
      .finally(setIsLoading(false));
  }, []);

  if (budgetPlanByProject.length === 0) return;

  return (
    budgetPlanByProject && (
      <LayoutFinanceTableByProject
        isLoading={isLoading}
        data={budgetPlanByProject}
        error={error}
        message={message}
        title='Таблица БДР (план по проектам)'
      />
    )
  );
}

export default IncomeCostPlanByProject;
