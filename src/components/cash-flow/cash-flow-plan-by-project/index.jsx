import React, { useMemo, useEffect, useState } from 'react';

import data from '../../../json/dds-by-project-plan.json';

import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

import { getCashFlowByProjectPlan } from '../../../utils/api-requests';

function CashFlowPlanByProject() {
  const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCashFlowByProjectPlan()
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

  const columns = useMemo(
    () => [
      {
        accessorFn: (data) => {
          return data?.[0]?.[0]?.projectType;
        },
        id: 'costType',
        header: 'Проекты',
      },
    ],
    []
  );

  if (budgetPlanByProject.length === 0) return;

  return (
    <LayoutCollapsedTableProject
      isLoading={isLoading}
      columns={columns}
      data={budgetPlanByProject}
    />
  );
}

export default CashFlowPlanByProject;
