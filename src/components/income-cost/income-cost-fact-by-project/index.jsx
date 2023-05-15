import React, { useState, useMemo, useEffect } from 'react';

import data from '../../../json/bdr-by-project-fact.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

import { getBudgetByProjectFact } from '../../../utils/api-requests';

function IncomeCostFactByProject() {
  const [budgetFactByProject, setBudgetFactByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
          fontSize: '18px',
        },
      },
    ],
    []
  );

  return (
    budgetFactByProject && (
      <LayoutCollapsedTableProject
        title='Проекты'
        isLoading={isLoading}
        data={budgetFactByProject}
        columns={columns}
      />
    )
  );
}

export default IncomeCostFactByProject;
