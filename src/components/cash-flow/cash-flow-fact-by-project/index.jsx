import React, { useMemo, useState, useEffect } from 'react';

import data from '../../../json/dds-by-project-fact.json';
import LayoutCollapsedTableProject from '../../layouts-table/layout-collapsed-table-project';

import { getCashFlowByProjectFact } from '../../../utils/api-requests';

function CashFlowFactByProject() {
  const [budgetFactByProject, setBudgetFactByProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCashFlowByProjectFact()
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
          return data?.[0]?.[0]?.projectType;
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

  if (budgetFactByProject.length === 0) return;

  return (
    budgetFactByProject && (
      <LayoutCollapsedTableProject
        columns={columns}
        data={budgetFactByProject}
        isLoading={isLoading}
      />
    )
  );
}

export default CashFlowFactByProject;
