import React, { useMemo, useEffect, useState } from 'react';

import data from '../../../json/dds-by-project-plan.json';

import { getCashFlowByProjectPlan } from '../../../utils/api-requests';
import LayoutFinanceTableDetailed from '../../layouts-table/layout-finance-table-detailed';

function CashFlowPlanByProject2() {
  const [cashFlowPlanByProject, setCashFlowPlanByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCashFlowByProjectPlan()
      .then((data) => {
        setCashFlowPlanByProject(data);
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

  if (cashFlowPlanByProject.length === 0) return;

  return (
    <LayoutFinanceTableDetailed
      isLoading={isLoading}
      columns={columns}
      data={cashFlowPlanByProject}
    />
  );
}

export default CashFlowPlanByProject2;
