import React, { useState, useEffect, useMemo } from 'react';

import data from '../../../json/bdr-by-project-plan.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';
import { getBudgetByProjectPlan } from '../../../utils/api-requests';

function IncomeCostPlanByProject() {
  // const [budgetPlanByProject, setBudgetPlanByProject] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getBudgetByProjectPlan()
  //     .then((data) => {
  //       setBudgetPlanByProject(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     })
  //     .finally(setIsLoading(false));
  // }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (data) => {
          return data?.[3]?.[0]?.projectType;
        },
        id: 'costType',
        header: 'Проекты',
        muiTableHeadCellProps: {
          align: 'left',
        },
      },
    ],
    []
  );

  return (
    <LayoutCollapsedTableProject
      title='Проекты'
      // isLoading={isLoading}
      data={data}
      columns={columns}
    />
  );
}

export default IncomeCostPlanByProject;
