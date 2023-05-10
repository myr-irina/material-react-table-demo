import React, { useState, useEffect } from 'react';

import data from '../../../json/bdr-by-project-plan.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';
import { getBudgetByProjectPlan } from '../../../utils/api-requests';

function IncomeCostPlanByProject() {
  const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBudgetByProjectPlan()
      .then((data) => {
        setBudgetPlanByProject(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    budgetPlanByProject && (
      <LayoutCollapsedTableProject title='Проекты' data={budgetPlanByProject} />
    )
  );
}

export default IncomeCostPlanByProject;
