import React, { useState, useEffect } from 'react';

import data from '../../../json/bdr-by-project-plan.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';
import { getBudgetByProjectPlan } from '../../../utils/api-requests';

function IncomeCostPlanByProject() {
  const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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

  return (
    budgetPlanByProject && (
      <LayoutCollapsedTableProject
        title='Проекты'
        isLoading={isLoading}
        data={budgetPlanByProject}
      />
    )
  );
}

export default IncomeCostPlanByProject;
