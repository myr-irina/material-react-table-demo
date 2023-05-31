import React, { useState, useEffect, useMemo } from 'react';

import data from '../../../json/bdr-by-project-plan.json';
import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project';
import { getBudgetByProjectFact } from '../../../utils/api-requests';

function IncomeCostFactByProject() {
  const [budgetFactByProject, setBudgetFactByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBudgetByProjectFact()
      .then((data) => {
        setBudgetFactByProject(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  if (budgetFactByProject.length === 0) return;

  return (
    budgetFactByProject && (
      <LayoutFinanceTableByProject
        isLoading={isLoading}
        data={budgetFactByProject}
        title='Таблица БДР (факт по проектам)'
      />
    )
  );
}

export default IncomeCostFactByProject;
