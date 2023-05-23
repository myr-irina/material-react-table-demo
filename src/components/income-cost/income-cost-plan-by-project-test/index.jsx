import React, { useState, useEffect, useMemo } from 'react';

import data from '../../../json/bdr-by-project-plan.json';
import LayoutFinanceTableByProject from '../../layouts-table/layout-finance-table-by-project';
import { getBudgetByProjectPlan } from '../../../utils/api-requests';

function IncomeCostPlanByProject2() {
  const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log({ budgetPlanByProject });

  useEffect(() => {
    getBudgetByProjectPlan()
      .then((data) => {
        setBudgetPlanByProject(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, []);

  if (budgetPlanByProject.length === 0) return;

  return (
    budgetPlanByProject && (
      <LayoutFinanceTableByProject
        isLoading={isLoading}
        data={budgetPlanByProject}
      />
    )
  );
}

export default IncomeCostPlanByProject2;
